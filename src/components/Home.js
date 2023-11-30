import Nav from "./Nav"
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { emitGetUsersRoom } from "../functions/emit/emitGetUsersRoom";
import { onGetUsersRoom } from "../functions/on/onGetUsersRoom";
import { socket } from "../socket";



const Home =()=>{
   
    const [users,setUsers]= useState([])
    useEffect(()=>{
        socket.emit('get users room','general')
        
        console.log(users)
        
    },[])

    
    return(
        <div className="h-screen w-screen bg-[#60A5FA]">
            <Nav></Nav>
        <Routes>
            <Route path="general" value='general'  element={<Chat />}/>
            <Route path="first-floor" element = {<h1>First floor</h1>}/>
            <Route path="second-floor" element = {<h1>Second floor</h1>}/> 
        </Routes>
          
        </div>
    )
}

export default Home;