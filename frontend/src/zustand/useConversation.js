import { create } from "zustand";

//crete function is taking set as parameter which is used to update the state.

const useConversation = create((set) => ({
	conversation: [],
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }), //its just like usestate hook , setSelectedConversation will set delected Conversation
	messages: [], //initially message array will be empty
	setMessages: (messages) => set({ messages }), // setMessage will set messages one-by-one
}));
 
export default useConversation;