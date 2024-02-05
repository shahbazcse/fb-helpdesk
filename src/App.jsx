import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Connect from './pages/Connect';
import Dashboard from "./pages/Dashboard";
import Conversation from './pages/Conversation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/conversations' element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
