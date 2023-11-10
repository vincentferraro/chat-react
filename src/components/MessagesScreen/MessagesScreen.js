import { useEffect, useState, useRef } from "react"
import Message from "./Message"
import { socket } from "../../socket"

const MessagesScreen = ()=>{

    const [messagesList, setMessagesList]=useState([])

    const chatContainerRef = useRef(null);

  //
  // Function to scroll to the bottom of the chat container
  //

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  
  //
  // UseEffect
  //

    useEffect(()=>{
        socket.on("message",(data)=>{
            let newMessage= {
                username:data.username,
                message:data.message
            }
            const newMessageList = [...messagesList,newMessage]
            setMessagesList(newMessageList)
        })
        scrollToBottom()
    },[messagesList])

    //
    // Rendered
    //

    return(<div className="h-[95%] w-[100%] truncate overflow-scroll" ref={chatContainerRef}>
        {messagesList.map((message,index) => <Message key={message.username+index}username={message.username} message={message.message} />)}
    </div>)
}

export default MessagesScreen