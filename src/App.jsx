import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
          <nav className="App-navigation">
            <NavLink className="App-link" to="/about">About</NavLink>&nbsp;
            <NavLink className="App-link" to="/skills">Skills</NavLink>&nbsp;
            <NavLink className="App-link" to="/projects">Projects</NavLink>&nbsp;
          </nav>
        <div className="App-title"><h1>Anders Johansson</h1></div>

        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/portfolio" element={<About/>} />
          <Route path="/about" element={<About/>} />

          <Route path="/skills" element={<Skills/>} />

          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </header>
    </Router>
    </div>

  );
}


export default App;
