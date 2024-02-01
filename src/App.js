import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Services from './Routes/Services'
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
