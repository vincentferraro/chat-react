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
    return(<div className="flex h-10 w-screen border-2 border-black mb-0">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChange}/>
                <button  >Sent</button>
            </form>
    </div>)
}

export default ChatBar