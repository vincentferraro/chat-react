
const User = (props)=>{

    
    return(<div className="flex items-baseline w-[90%] ml-[5%] mr-[5%] mt-[2%] h-11 border-2 border-gray-500 border-solid">
        <span className="m-[5%]">{props.name}</span>
        <div className="w-3 h-3 rounded-full bg-green-600"></div>
    </div>)
}

export default User