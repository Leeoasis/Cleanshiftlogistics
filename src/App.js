import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Services from './Routes/Services'
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './Routes/About';
import Contact from './Routes/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='services' element={<Services/>}></Route> 
        <Route path='about' element={<About/>}></Route> 
        <Route path='contact' element={<Contact/>}></Route> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
