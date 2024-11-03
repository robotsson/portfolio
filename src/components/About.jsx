import profileimg from '../images/doesnotexistguy.jpg';
import { Link } from "react-router-dom";
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <header>
      <h2>About me</h2>
      <div className="App-about">
        <div className="App-about-text">
   
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          magnam exercitationem dicta? Mollitia ratione nisi, laborum consequuntur. 
          For more see&nbsp;
          <Link className="App-link" to="/skills">skills</Link> 
          <p></p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem dicta? Laborum consequuntur
          labore. Have a look at my&nbsp;
          <Link className="App-link" to="/projects">projects</Link>  <p></p>

          <a href="https://robotsson.github.io/cv"
            className="App-link" 
            target="_blank"
            rel="noopener noreferrer">
            Curriculum Vitae
          </a>

        </div>
        <img src={profileimg} className="App-about-image" alt="a portrait of me" />
      </div>
      <h2>Contact me</h2>
      <Link to="mailto:robotsson@email.com">Email: robotsson@email.com</Link>
      <br/>
      <Link to="tel:+46729764563">Phone: +46729764563</Link>
    </header>
  );
}

export default About;