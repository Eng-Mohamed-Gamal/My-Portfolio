
import './App.css';
import About from './Commponents/About';
import Contact from './Commponents/Contact';
import Home from './Commponents/Home';
import Nav from './Commponents/Nav';
import Port from './Commponents/Port';
import Switcher from './Commponents/Switcher';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <h1 className="cen">about <span>me</span></h1>
      <About></About> 
      <h1 className="cen">my <span>portfilio</span></h1>
      <Port></Port>
      <h1 className="cen"><span>contact</span> me</h1>
      <Contact></Contact>
      <Switcher></Switcher>
    </div>
  );
}

export default App;
