import ListUserPanel from "./ListUserPanel/ListUserPanel"
import ChatBar from "../components/ChatBar"
import MessagesScreen from "./MessagesScreen/MessagesScreen"
import { useEffect, useState } from "react"
import { socket } from "../socket"

// import { useEffect, useState } from "react"
// import { emitGetUsersRoom } from "../functions/emit/emitGetUsersRoom"
// import { onGetUsersRoom } from "../functions/on/onGetUsersRoom"

// Functions


const Chat = ()=>{

    const [users, setUsers] = useState([])
    const [previousMessages, setPreviousMessages]= useState([])
    useEffect(()=>{
        
        socket.on('get users room',(usersList)=>{
            const usersJson = usersList.map(user => JSON.parse(user))
            setUsers(usersJson)
        })

        console.log(users)
    },[users])

    useEffect(()=>{
        socket.on('get previous messages', (data)=>{
            const datas= data.map((message)=>JSON.parse(message)).sort((a,b)=>a.date - b.date).reverse()
            setPreviousMessages([...previousMessages,...datas])
       })
    },[previousMessages])

    console.log('PREVIOUS',previousMessages)
    // console.log(users)
    return(
            <div className="h-[90%] w-[100%] flex">

        <div className="flex h-[100%] w-[20%] ">
            <ListUserPanel 
                users={users}
             />
        </div>
        <div className="flex-col w-[100%] ">
            <MessagesScreen previousMessages={previousMessages} />
            <ChatBar />
        </div>
        
    </div>
        
    )

}

export default Chat