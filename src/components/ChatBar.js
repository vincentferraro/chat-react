import { useEffect, useState } from "react"
import { socket } from "../socket"

const ChatBar = ()=>{

    const [message, setMessage]=useState('')

    function onChange(e){
        console.log(message)
        setMessage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        socket.on('chat message', message)
        console.log("Sent")
        setMessage('')
    }
    
    
    return(<form className="flex h-[5%] mb-0 bg-[#3B395D]" onSubmit={handleSubmit}>
            
            <input className="w-[90%] mt-1 mb-1 ml-3 mr-3 rounded-lg" type="text" placeholder="Enter a message..." value={message} onChange={onChange}/>
                <button className="w-[5%] mt-1 mb-1 ml-3 mr-3 text-white rounded-lg bg-green-800" type="submit" >Sent</button>
            
                
            
    </form>)
}

export default ChatBar