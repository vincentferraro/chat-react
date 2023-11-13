import './App.css';
import Nav from './components/Nav';
import Chat from './components/Chat';
import SignIn from './components/SignIn'
import { BrowserRouter,Route, Routes } from 'react-router-dom';



function App() {

  
  return (
    <div>
        <BrowserRouter>
         {/* <Nav />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Chat />}/>
          <Route path="/first-floor" element ={<h>First floor</h>}/>
          <Route path="/second-florr" element ={<h>Second floor</h>}/> 
        </Routes>
        */}
        <SignIn />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
