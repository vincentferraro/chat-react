
const User = (props)=>{

    
    return(<div className="flex items-baseline w-[100%] mt-[2%] h-11 bg-[#2F2C53]">
        <div className="w-3 h-3  m-3 rounded-full bg-green-600"></div>
        <span className="m-[5%]">{props.name}</span>
        
    </div>)
}

export default User