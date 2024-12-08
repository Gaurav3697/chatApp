import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/exactTime";
import useConversation from "../../zustand/useConversation";


const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "items-end justify-end" : "items-start justify-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`w-full flex ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`m-2 p-2 rounded-2xl bg-white dark:bg-gray-800 dark:text-white flex justify-left text-left items-center dark:bg-opacity-70 h-auto max-w-[40vw] md:max-w-[25vw]  text-white  ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;