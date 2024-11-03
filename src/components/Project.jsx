import './Project.css';

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
                <img src={props.image} className="App-project-image" alt="a project" />
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
                <img src={props.image} className="App-project-image" alt="logo" />
                <br />
                github
              </a>
            </div>
        );       
    }
}

export default Project;