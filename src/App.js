
import './App.css';
import About from './Commponents/About';
import Home from './Commponents/Home';
import Nav from './Commponents/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <h1 className="cen">about <span>me</span></h1>
      <About></About>
    </div>
  );
}

export default App;
