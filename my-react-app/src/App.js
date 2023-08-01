
import './App.css';
import HamburgerNav from './components/HamburgerNavBar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

      <HamburgerNav/>
      </Router>
    </>
  );
}

export default App;
