import Message from "./Message"
const MessagesScreen = ()=>{

    const messagesList = [{
        username:"Alice",
        message:"Hello"
    },{
        username:"Georges",
        message:"Hello Alice, How are you?"
    }]
    return(<div>
        {messagesList.map(message => <Message username={message.username} message={message.message} />)}
    </div>)
}

export default MessagesScreen