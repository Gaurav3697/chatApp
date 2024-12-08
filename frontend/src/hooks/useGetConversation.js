import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const useGetConversation = () => {
    const [converloading, setConverLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setConverLoading(true);
            try {
                const res = await fetch("/api/user/allusers", {
                    credentials: 'include',
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversation(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setConverLoading(false)
            }
        }

        getConversations();


    }, [])
    return { converloading, conversation };
}

export default useGetConversation;