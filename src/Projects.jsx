import { NavLink } from "react-router-dom";
import './Projects.css';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import { Link } from "react-router-dom";
import React from "react";


function Project( props ) {
    if(props.url1 != "")
    {
        return (
            <div className="App-project">
              {props.descr}
              <p></p>
              <a href={props.url1}>
                <img src={props.image} className="App-project-image" alt="logo" />
                <br />
                demo
                </a>
                &ensp;
                <Link to='https://www.dn.se'>display text</Link>
                <a  
                    className="App-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.dn.se">
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
              <a href={props.url2}>
                <img src={props.image} className="App-project-image" alt="logo" />
                <br />
                github
                </a>
            </div>
        );       
    }
}

function Projects() {
    return (
      <header>
        <a href="https://robotsson.github.io/">robooo</a>
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
      </header>
    );
  }
  
  export default Projects;
  