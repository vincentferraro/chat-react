import Message from "./Message"
const MessagesScreen = ()=>{

    const messagesList = [{
        username:"Alice",
        message:"Hello"
    },{
        username:"Georges",
        message:"Hello Alice, How are you?"
    }]
    return(<div className="w-[100%] border-2 border-solid border-green-700">
        {messagesList.map(message => <Message username={message.username} message={message.message} />)}
    </div>)
}

export default MessagesScreen