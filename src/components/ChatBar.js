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
    return(<div className="flex h-[5%] w-scree mb-0 bg-[#3B395D] ">
            
                <input className="w-[60%] mt-1 mb-1 ml-3 mr-3 rounded-lg" type="text" onChange={onChange}/>
                <button className="w-[5%] mt-1 mb-1 ml-3 mr-3 text-white rounded-lg bg-green-800" >Sent</button>
            
    </div>)
}

export default ChatBar