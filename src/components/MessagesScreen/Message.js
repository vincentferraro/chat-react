
const Message = (props)=>{

    return(<div className="h-40 w-5/6 border-2 border-black border-solid rounded-md">
        <div className="h-36 w-2/12">
            <span>{props.username}</span>
        </div>
        <div className="h-36 w-8/12">
            <span>{props.message}</span>
        </div>
    </div>)
}

export default Message