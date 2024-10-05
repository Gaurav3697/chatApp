import message from "../models/messagemodel.js"
import conversation from "../models/conversationmodel.js"

export const sendMessage = async(req,res) =>{
    try{
        const {messages} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let Conversation = await conversation.findOne({
            participants : { $all : [senderId , receiverId] },
        })

        if(!Conversation){
            Conversation = await conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newmessage = new message({
            senderId,
            receiverId,
            messages,
        })

        if(newmessage){
            Conversation.messages.push(newmessage._id);
        }

        await Conversation.save();
        await newmessage.save()

        res.status(201).json(newmessage);

    }catch(error){
        console.log("Error in Send message Controller: ",error);
        res.status(400).json({
            error:"message not sent",
        })
    }
}

export const getmessage = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const Conversation = await conversation.findOne({
          participants:{ $all: [senderId,userToChatId]}
        }).populate("messages");

        if(!Conversation){
            return res.status(200).json([])
        }

        const Messages = Conversation.messages
        res.status(200).json(Messages);

    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}
