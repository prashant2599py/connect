import { useAuthContext } from "../../../context/AuthContext"
import { extraxtTime } from "../../../utils/formatTime";
import useConversation from "../../../zustand/useConversation";

export const  Message = ({ message })=> {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : ""
  const formattedTime =  extraxtTime(message.createdAt);

  // console.log(message)
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="profilePic" />
            </div>
        </div>
        
        <div className={`chat-bubble text-white ${bubbleBgColor} `}>{message.message}</div> 
        <div className="chat-footer opacity-50 text-xs gap-1 items-center">{formattedTime}</div> 
    </div>
  )
}

export default Message