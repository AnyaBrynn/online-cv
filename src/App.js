import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";



import Header from './Header';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import Art from './Pages/Art/Art';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/online-cv" element={<Home />}/>
        <Route path="/resume" element={<Resume />} />
      </Routes>
      
    </div>
  );
}

export default App;
