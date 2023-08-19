import './App.css';
import HamburgerNav from './components/HamburgerNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages imports
import Resume from './components/Pages/Resume';
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

        <Route path='/' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </div>
      </Router>

  </>
  );
};

export default App;