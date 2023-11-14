import ListUserPanel from "./ListUserPanel/ListUserPanel"
import ChatBar from "../components/ChatBar"
import MessagesScreen from "./MessagesScreen/MessagesScreen"
// Functions

import { connect } from "../functions/connectManager"
import setUsername from "../functions/setUsername"
import { useEffect } from "react"
// import { socket } from "../socket"
const Chat = ()=>{


  useEffect(()=>{
    connect()
    // setStateUsername(prompt("Please enter username",''))
    
  },[])
  
    useEffect(()=>{
        // connect()
        // socket.emit('chat message',"Hello from CHAT REACT")
    })
    

    return(
            <div className="h-[90%] w-[100%] flex">

        <div className="flex h-[100%] w-[20%] ">
            <ListUserPanel />
        </div>
        <div className="flex-col w-[100%] ">
            <MessagesScreen />
            <ChatBar />
        </div>
        
    </div>
        
    )

}

export default Chat