import { useState } from "react"
import { socket } from "../socket"
import { Input, Button } from "@chakra-ui/react"
const ChatBar = ()=>{

    const [message, setMessage]=useState('')

    function onChange(e){
        setMessage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        socket.emit('chat message', {room:"general", message:message})
        setMessage('')
    }
    
    
    return(
    <form className="flex h-[5%] mb-0 bg-[#3B395D]" onSubmit={handleSubmit}>  
        <Input  textColor='white' className="w-[90%] mt-1 mb-1 ml-3 mr-3" type="text" placeholder="Enter a message..." value={message} onChange={onChange}/>
        <Button className="w-[5%] mt-1 mb-1 ml-3 mr-3" type="submit" >Sent</Button>
    </form>)
}

export default ChatBar