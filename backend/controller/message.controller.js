import Conversation from "../models/conversation.model.js";

export const sendMessage = async(req, res) =>{
    
    try {
        const message = req.body;
        const { id  : receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId] }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
        const newMessage = new MessageChannel({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await newMessage.save();
        await conversation.save();

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("error is message controller", error.message);
        res.status(500).json({message : "Internal Server Error"})
    }
    
}