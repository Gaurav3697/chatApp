import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout';
import useGetConversation from '../../hooks/useGetConversation';

const Sidebar = () => {
  const { Loading, logout } = useLogout();
  const { converloading, conversation } = useGetConversation();
  const users = conversation.filteredUsers

  const logoutHandler = () => {
    logout()
  }

  return (
    <div className="relative sidebar-container h-full w-[30vw] bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-60 flex flex-col rounded-3xl">
      <div className="flex justify-start ml-3 text-3xl font-bold">Chats</div>
      <div className="search flex justify-center">
        <input type='text' id='search' name='search' placeholder='search' className=' p-2 m-4 w-11/12 block rounded-2xl border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
      </div>

      {/* displaying all the contacts who has chat with the user  */}
      <div className="flex flex-col p-4 overflow-y-auto ">

        <div className="flex flex-col p-4 overflow-y-auto">
          {users ? users.map((i) => (
            <Contact key={i._id} img={i.profilePic} name={i.username} />
          )) : null}
        </div>
      </div>
      <button onClick={logoutHandler} className="absolute bottom-0 w-16 bg-blue-900 h-12 m-4 cursor-pointer rounded-xl flex justify-center align-middle text-white">
        <CiLogout style={{ fontSize: '30px' }} />
      </button>
    </div>
  )
}

const Contact = ({ img, name }) => {
  return (
    <div className=" contact-container h-[10vh] w-11/12 bg-white dark:bg-black dark:hover:bg-gray-950 cursor-pointer bg-opacity-50 dark:bg-opacity-60 flex rounded-3xl mb-2">
      <img src={img} alt="" className="h-9 w-9 flex items-center align-middle m-4 rounded-2xl" />
      <span className="flex justify-start items-center align-middle m-4">{name}</span>
    </div>
  )
}

export default Sidebar
