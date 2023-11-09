
const User = (props)=>{

    
    return(<div className="flex w-4/5 h-11 border-2 border-gray-500 border-solid">
        <span>{props.user}</span>
        <div className="w-3 h-3 rounded-full bg-green-600"></div>
    </div>)
}

export default User