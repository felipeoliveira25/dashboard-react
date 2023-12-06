import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Home from './pages/home/home';
import AboutUs from './pages/sobrenos/AboutUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
