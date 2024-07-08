import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
