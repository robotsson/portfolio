import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
          <nav className="App-navigation">
            <Link className="App-link" to="/about">About</Link>&nbsp;
            <Link className="App-link" to="/skills">Skills</Link>&nbsp;
            <Link className="App-link" to="/projects">Projects</Link>&nbsp;
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
