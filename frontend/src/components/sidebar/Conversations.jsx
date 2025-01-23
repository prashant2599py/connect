import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation"


const Conversations = () => {

  const {loading, conversations} = useGetConversation();
  console.log("Conversation : " + conversations)
  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversations.map((conversation) => {
        <Conversation
          key={conversation._id}
          conversations={conversation}
        />
      })}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

    </div>
  )
}

export default Conversations