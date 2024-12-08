import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const Chat = () => {
  const stored = JSON.parse(localStorage.getItem('chat-user'));
  const currentUser = stored.User
  const userSelected = false;

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="h-screen w-screen md:w-[70vw] md:h-[90vh] bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 flex rounded-3xl">

          <Sidebar />
          <Chatbox img={currentUser.profilePic} name={currentUser.username} userSelected = {userSelected} />
        </div>
      </div>
    </div>
  )
}



const Chatbox = ({ img, name , userSelected }) => {
  return (
    <div className="chatbox-container h-full flex flex-col rounded-3xl w-full">
      <div className="heading flex flex-row h-16 border-b-2 w-fu">
        <img src={img} alt="" className="h-9 w-9 flex items-center align-middle m-4 rounded-2xl" />
        <span className="flex justify-start items-center align-middle m-4">{name}</span>
      </div>

      {
        userSelected ?
          (<div className="messageContainer h-[80%] overflow-y-auto">

          </div>)
          : <div className="flex justify-center text-center text-2xl md:text-7xl h-full w-full relative top-[30%] font-bold font-mono tracking-wider">Welcome</div>
      }
      {/* here will be send message input feild  */}
      <div className="mt-1 border-t-2 flex justify-center w-full"> <input type='text' id='message' name='message' placeholder='type message' className=' p-2 m-4 w-11/12 block rounded-2xl border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' /></div>
    </div>
  )
}


export default Chat
