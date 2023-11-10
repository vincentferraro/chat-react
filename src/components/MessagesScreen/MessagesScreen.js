import Message from "./Message"
const MessagesScreen = ()=>{

    const messagesList = [{
        username:"Alice",
        message:"Hello"
    },{
        username:"Georges",
        message:"Hello Alice, How are you?"
    }]
    return(<div className="h-[92%] w-[100%] ">
        {messagesList.map((message,index) => <Message key={message.username+index}username={message.username} message={message.message} />)}
    </div>)
}

export default MessagesScreen