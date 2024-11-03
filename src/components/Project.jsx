import './Project.css';

function Project( props ) {

    if(props.url1 !== "")
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
              <a href={props.url2} target="_blank">
                <img src={props.image} className="App-project-image" alt="logo" />
                <br />
                github
              </a>
            </div>
        );       
    }
}

export default Project;