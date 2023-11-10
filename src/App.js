import './App.css';
import Nav from './components/Nav';
import Chat from './components/Chat';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [username, setUsername]= useState('')

  useEffect(()=>{
    setUsername(prompt("Please enter username",''))
  },[])
  
  return (
    <div className="flex-col h-screen w-[100%] bg-blue-400">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Chat username={username} />} />
          <Route path="/first-floor" element ={<h>First floor</h>}/>
          <Route path="/second-florr" element ={<h>Second floor</h>}/>
        </Routes>
        
        </BrowserRouter>
        
    </div>
  );
}

export default App;
