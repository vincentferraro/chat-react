import ListUserPanel from "./ListUserPanel/ListUserPanel"
import ChatBar from "../components/ChatBar"
import MessagesScreen from "./MessagesScreen/MessagesScreen"
import { getUsers } from "../functions/getSocket"
import { setRoom } from "../functions/joinRoom"
import { useEffect, useState } from "react"

// Functions


const Chat = ()=>{

    const [users, setUsers]= useState([])

    useEffect(()=>{
        setRoom('general')
        // getSocket()
        const userArr = getUsers()
        if(userArr){
            // setUsers(...userArr)
            console.log('ARR',userArr)
            setUsers(previous =>{
                return [...previous, userArr]
            })
        }
    
    },[])

    return(
            <div className="h-[90%] w-[100%] flex">

        <div className="flex h-[100%] w-[20%] ">
            <ListUserPanel users={users} />
        </div>
        <div className="flex-col w-[100%] ">
            <MessagesScreen />
            <ChatBar />
        </div>
        
    </div>
        
    )

}

export default Chat