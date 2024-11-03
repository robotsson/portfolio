import './Skills.css';
import { motion } from 'framer-motion';

function Skills() {
    return (
      <header>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}> 
        <div className="App-skills">
          <div className="App-skills-title">
            <h2>Skills</h2></div>
            <div className="App-skills-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            magnam exercitationem dicta? Mollitia ratione nisi, laborum consequuntur
            labore quis fugit.
            <p></p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            magnam exercitationem dicta? Mollitia ratione nisi, laborum consequuntur
            labore quis fugit.<p></p>
            C#, JavaScript, React, HTML, CSS.
            </div>
          <p></p>
        </div>
        </motion.div>
      </header>
    );
  
}
  
export default Skills;