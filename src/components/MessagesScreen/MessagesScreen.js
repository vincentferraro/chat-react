import { useEffect, useState, useRef } from "react"
import Message from "./Message"
import { socket } from "../../socket"


const MessagesScreen = ()=>{


    const [messagesList, setMessagesList]=useState([
    //   {
    //     username:"Alice",
    //     message:"Hello Everyone",
    //     color:"#7FFF00"
    // }
  ])

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
        socket.on('chat message',(data)=>{
          const json = JSON.parse(data)
            let newMessage= {
                username:json.username,
                message:json.message
            }
            const newMessageList = [...messagesList,newMessage]
            setMessagesList(newMessageList)
        })
        scrollToBottom()
    },[messagesList])

    //
    // Rendered
    //

    return(<div className="h-[95%] w-[100%] bg-[#60A5FA] truncate overflow-scroll" ref={chatContainerRef}>
        {messagesList.map((message,index) => <Message key={message.username+index} color={message.color}username={message.username} message={message.message}  />)}
    </div>)
}

export default MessagesScreen