import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn'
import Chat from './components/Chat';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { disconnect } from './functions/connectManager';
import { onInfoMessage } from './functions/on/onInfoMessage';

function App() {

  useEffect(()=>{

    const handleUnload = ()=>{
      disconnect()
    }

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('unload', handleUnload);

    return ()=>{
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('unload', handleUnload);
  
    }
  },[])

  useEffect(()=>{
    onInfoMessage()
  })
  
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home/general" element={<Chat />}/>
            <Route path="/home/first-floor" element ={<h>First floor</h>}/>
            <Route path=":second-floor" element ={<h>Second floor</h>}/> 
          </Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
