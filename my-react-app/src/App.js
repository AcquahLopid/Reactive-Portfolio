import './App.css';
import HamburgerNav from './components/HamburgerNavBar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <>
      <Router>

      <HamburgerNav/>

      <div className='pages'>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </div>
      </Router>

  </>
  );
};

export default App;