import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/general/navbar/navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const user = localStorage.getItem('user');
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/' Component={user ? Home : Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
