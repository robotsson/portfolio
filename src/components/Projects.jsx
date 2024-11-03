import './Projects.css';
import Project from './Project.jsx';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import { motion } from 'framer-motion';

function Projects() {
    return (
      <header>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}> 
        <div className="App-skills-title">
          <h2>Projects</h2>
        </div>
        <div className="App-projects">
            
          <Project 
            descr="Cakery (HTML + CSS)" 
            image={project3}
            url1="https://robotsson.github.io/cakery/" 
            url2="https://github.com/robotsson/cakery/" 
          />
            
          <Project 
            descr="Video Poker (JavaScript)" 
            image={project2}
            url1="https://robotsson.github.io/poker/" 
            url2="https://github.com/robotsson/poker/" 
          />

          <Project 
            descr="CV layout (HTML+CSS)" 
            image={project1}
            url1="https://robotsson.github.io/cv/" 
            url2="https://github.com/robotsson/cv/" 
          />

          <Project 
            descr="ToDo-List (C# console app)" 
            image={project4}
            url1="" 
            url2="https://github.com/robotsson/ToDoList/" 
          />

        </div>
        </motion.div>
      </header>
    );
  }
  
  export default Projects;
  