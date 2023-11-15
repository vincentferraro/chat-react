import Nav from "./Nav"
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";
import { connect } from "../functions/connectManager";
import setUsername from "../functions/setUsername";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { emitJoinRoom } from "../functions/joinRoom";
const Home =()=>{
    const username = useSelector(state => state.username)

    console.log('FROM REDUX',username)

    useEffect(()=>{
        connect()
        setUsername(username.username)
        emitJoinRoom('general')
    },[])

    return(
        <div className="h-screen w-screen bg-[#60A5FA]">
            <Nav></Nav>
        <Routes>
            <Route path="general" element={<Chat />}/>
            <Route path="first-floor" element = {<h1>First floor</h1>}/>
            <Route path="second-floor" element = {<h1>Second floor</h1>}/> 
        </Routes>
          
        </div>
    )
}

export default Home;