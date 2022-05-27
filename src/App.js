//Internal Imports
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { createHashHistory } from 'history';
import Box from "@mui/material/Box";

//External Imports
import {HashRouter as Router} from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        light: "#90F4F4",
        main: "#57efef",
        dark: "#0B6F6F"
      },
      primary: {
        light: "#F3C98B",
        main: "#E9A135",
        dark: "#81530E"
      },
    },
    typography: {
      fontFamily: "-apple-system"
    }
  });

  return (
    <Router history={createHashHistory()}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Box sx={{backgroundColor: "secondary.light"}}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Box>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;