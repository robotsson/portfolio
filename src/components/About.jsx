import profileimg from '../images/doesnotexistguy.jpg';
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <header>
      <h2>About me</h2>
      <div className="App-about">

        <div className="App-about-text">

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          magnam exercitationem dicta? Mollitia ratione nisi, laborum consequuntur
          labore quis fugit.<p></p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          magnam exercitationem dicta? Mollitia ratione nisi, laborum consequuntur
          labore quis fugixxt.<p></p>

          <Link 
            className="App-link" 
            target="_blank"
            rel="noopener noreferrer"
            to="https://robotsson.github.io/cv">
            CV
          </Link>

        </div>
        <img src={profileimg} className="App-about-image" alt="logo" />
      </div>
      <h2>Contact me</h2>
      <Link to="mailto:robotsson@email.com">Email: robotsson@email.com</Link>
      <br/>
      <Link to="tel:+46729764563">Phone: +46729764563</Link>
    </header>
  );
}

export default About;