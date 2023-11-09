import { useState } from "react"

const ChatBar = ()=>{

    const [message, setMessage]=useState('')

    function onChange(e){
        console.log(message)
        setMessage(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log("Sent")

    }
    return(<div className="flex h-[5%] w-screen border-2 border-black mb-0">
            
                <input className="w-[90%] mt-1 mb-1 ml-3 mr-3 rounded-lg" type="text" onChange={onChange}/>
                <button className="w-[5%] mt-1 mb-1 ml-3 mr-3 text-white rounded-lg bg-green-800" >Sent</button>
            
    </div>)
}

export default ChatBar