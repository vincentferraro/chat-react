import './App.css';
import Nav from './components/Nav';
import Chat from './components/Chat';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="flex-col h-screen w-screen bg-blue-400">
        <BrowserRouter>
        <Nav />
        <Chat />
        <Routes>
          <Route to="/" />
          <Route to="/first-floor" />
          <Route to="/second-florr" />
        </Routes>
        
        </BrowserRouter>
        
    </div>
  );
}

export default App;
