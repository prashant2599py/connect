import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-toastify";
import useConversation from "../../zustand/useConversation";
function SearchInput() {

  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const {setSelectedConversation} = useConversation();

const handleSubmit = (e) => {
  e.preventDefault();
  if(!search) return;
  
  const conversation = conversations.find((convo) => convo.fullName.toLowerCase().includes(search.toLowerCase()));
  // console.log(conversation)
  if(conversation){
    setSelectedConversation(conversation)
    setSearch('');
  }else toast.error("No such user exists")
}
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" 
          placeholder="Search" 
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
           <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput