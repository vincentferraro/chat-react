import Nav from "./Nav"
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
const Home =()=>{
    const username = useSelector(state => state.username)
    console.log('FROM REDUX',username)
    return(
        <div>
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