import './App.css';
import { Routes, Route } from "react-router-dom";


import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

// theming imports
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

// create theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffedbb", //yellow
    },
    secondary: {
      main: "#000000", //black
    },
  },
  typography: {
    fontFamily: ["Georgia"].join(","),
    fontWeight: 300,
    fontSize: 10,
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",

    h5: {
      fontWeight: 300,
      fontSize: "1.7rem",
    },
    h6: {
      fontWeight: 300,
      fontSize: "1.3rem",
      textDecoration: "none",
    },
    body1: {
      fontSize: "1.2rem",
      textDecoration: "none",
      a: {
        color: "#000000",
        textDecoration: "none",
      },
      "a:hover": {
        color: "#a63c06",
      },
      "a:visited": {
        color: "#000000",
      },
    },
  },
  img: {
    width: "100px",
    height: "100px",
},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="/online-cv" element={<Home />}/>
        <Route path="/cv" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
