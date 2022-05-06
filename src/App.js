//Internal Imports
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


//External Imports

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="test-divv">
        Hello
      </div>
    </div>
  );
}

export default App;