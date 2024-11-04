import './Project.css';
import { motion } from "framer-motion";

function Project( props ) {

    if(props.url1 !== "")
    {
        return (
            <div className="App-project">
              {props.descr}
              <p></p>
              <a href={props.url1}                   
                 className="App-link"
                 target="_blank"
                 rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>    
                  <img src={props.image} className="App-project-image" alt="a project" />
                </motion.div>
                <br />
                demo
              </a>
              &ensp;
              <a href={props.url2}
                 className="App-link"
                 target="_blank"
                 rel="noopener noreferrer">
                github
                <p></p>
              </a>
            </div>
        );
    }
    else
    {
        return (
            <div className="App-project">
              {props.descr}
              <p></p>
              <a href={props.url2} 
                 target="_blank"
                 rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>      
                  <img src={props.image} className="App-project-image" alt="logo" />
                </motion.div>
                <br />
                github
              </a>
            </div>
        );       
    }
}

export default Project;