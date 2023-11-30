import { useEffect } from "react"
import User from "./User"
import { useState } from "react"
import { socket } from "../../socket"
const ListUserPanel = ()=>{
    
    const [users, setUsers]=useState()
    useEffect(()=>{
        socket.emit('get users room','general')
        socket.on('get users room',(users)=>{
            const json = users.map(user => JSON.parse(user))
            console.log(users)
            setUsers([...json ])
        })
    },[])
    
    return (
        <div className="w-[100%] h-auto bg-[#3B395D] text-white" >
            {users?.map( (user) => <User  key={user.id} name={user.username} />)}
        </div>
    )
}

export default ListUserPanel