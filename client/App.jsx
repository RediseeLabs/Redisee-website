import './App.css';
import NavBar from './Components/Navbar';
import Product from './Components/Product';
import Team from './Components/Team';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <About />
      <Team />
    </div>
  );
}

export default App;
