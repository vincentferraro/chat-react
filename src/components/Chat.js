import ListUserPanel from "./ListUserPanel/ListUserPanel"
import ChatBar from "../components/ChatBar"
import MessagesScreen from "./MessagesScreen/MessagesScreen"
const Chat = ()=>{
    return(<div className="h-[88%] w-[100%] flex-col">
        <div className="flex h-[100%] w-[100%] border-solid border-2 border-purple-500">
        <ListUserPanel />
        <MessagesScreen />
        </div>
        <ChatBar />
    </div>)

}

export default Chat