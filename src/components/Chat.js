import ListUserPanel from "./ListUserPanel/ListUserPanel"
import ChatBar from "../components/ChatBar"
import MessagesScreen from "./MessagesScreen/MessagesScreen"
const Chat = ()=>{
    return(<div>
        <div>
        <ListUserPanel />
        <MessagesScreen />
        </div>
        <ChatBar />
    </div>)

}

export default Chat