import { useEffect } from "react";
import useConversation from "../../zustand/useConversation"

const MessageContainer = ()=>{
    const {selectedConversation , setSelectedConversation} = useConversation();

    useEffect(()=>{
        return ()=> setSelectedConversation(null);
    },[selectedConversation]);

    return(
        <div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
    )
}

export default MessageContainer;