//Internal Imports
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

//External Imports
import {HashRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;