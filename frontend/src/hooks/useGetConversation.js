import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const  useGetConversation = ()=> {
   const [loading, setLoading] = useState(false);
   const [conversations, setConversations] = useState([]);

   useEffect(() => {
        const getConversations = async() => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
        
                setConversations(data);
                if(data.error){
                    throw new Error(data.error);
                }
           } catch (error) {
                toast.error(error.message)
           }finally{
            setLoading(false)
           }
        }
        getConversations();
   }, [])

   return { loading, conversations };
   
}

export default useGetConversation