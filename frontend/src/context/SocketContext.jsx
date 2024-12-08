import { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { useAuthContext } from "./AuthContext"
import io from "socket.io-client";

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {  //change to 3000 when creating built
                query: {
                    userId: authUser._id  //to authenticated user
                }
            });

            setSocket(socket);

            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (onlineUsers) => {
                setOnlineUsers(onlineUsers);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    //pass socket and online user in
    return <socketContext.Provider value={{socket,onlineUsers}}>{children}</socketContext.Provider>
}