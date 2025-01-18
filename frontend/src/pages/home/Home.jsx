import MessageContainer from "../../components/sidebar/messages/MessageContainer"
import Sidebar from "../../components/sidebar/SideBar"


function Home() {
  return (
    <div className="flex gap-2">
        <Sidebar />
        <div className="divider divider-horizontal"></div>
        <MessageContainer />
    </div>
  )
}

export default Home