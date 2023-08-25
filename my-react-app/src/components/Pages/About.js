import React from "react";
import "../Pages/About.css";
import myPicture from "../Assets/Emanuel-blossom.jpg";
import GoToTop from '../Utils/GoToTop';

// Language pictures import
import Html5 from "../Assets/html5.png";
import CSS from "../Assets/cssLogo.png";
import ES6 from "../Assets/javascriptES6.png";
import Cplusplus from "../Assets/C++.png";
import Java from "../Assets/Java.png";

// Database pictures import
import mySQL from "../Assets/mysql.png";
import MongoDB from "../Assets/MongoDB.png";

// Framework/library pictures import
import Bootstrap from "../Assets/bootstrap.png";
import JQuery from "../Assets/JQuery.png";
import Nodejs from "../Assets/nodejs.png";
import Expressjs from "../Assets/Expressjs.png";
import HandleBarsjs from "../Assets/HandleBarsjs.png";
import ReactLogo from "../Assets/react.png";
import Redux from "../Assets/redux.png";

// Tools pictures import
import CommdLine from "../Assets/command-line.png";
import DevTools from "../Assets/Dev-Tools.png";
import Git from "../Assets/git.png";
import GitHub from "../Assets/github (1).png";
import Insomnia from "../Assets/Insomnia.png"
import Postman from "../Assets/Postman.webp"
import Ajax from "../Assets/ajax-logo-1.png";
import GraphQL from "../Assets/GraphQL.png";
import Apollo from "../Assets/Apollo.png";


const About = () => {
  return (
    <>
<div className="MainContainer">
    <section className="container"> 
      <div className="pictureTitle">
        <img src={myPicture} alt="Emanuel Molina" className="myPicture" />
        <h1 className="title">Full Stack Developer</h1>
      </div>
      <div className="aboutText">
          <h2><strong>About Me</strong></h2>
          <p className="aboutP">
            As a passionate and dedicated developer, I went through an intensive journey 
            to enhance my skills and advance my career through a bootcamp
            program. With great determination and commitment, I successfully
            earned a certificate that validated my expertise in the field. 
            This experience equipped me with a solid foundation 
            in various programming languages, frameworks, and development methods.
            Through hands-on projects and collaborative learning, I enhanced my 
            problem-solving abilities and gained practical experience in building 
            innovative software solutions. With this certificate 
            and a thirst for knowledge, I am now ready to contribute
            my skills to the dynamic world of software development, eager to take
            on exciting challenges and make a meaningful impact in the industry. Please feel
            free to look at my past projects, resume, and portfolio, or reach out to me for
            more information.
          </p>
      </div>
    </section>


    <br/>


<div className="EmanuelSkills">
{/* Languages section */}
    <div className="skills">
    <h3>Languages</h3>
    </div>
    <br/>
    <div id="langGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={CSS} alt="Css logo"/>
        <figcaption>CSS</figcaption>
      </div>
      <div>
        <img src={ES6} alt="Javascript logo"/>
        <figcaption>Javascript</figcaption>
      </div>
      <div>
        <img src={Java} alt="Java logo"/>
        <figcaption>Java</figcaption>
      </div>
      <div>
        <img src={Cplusplus} alt="C++ logo"/>
        <figcaption>C++</figcaption>
      </div>
    </div>


    <br/>

{/* Databases Section */}
    <div className="skills">
    <h3>DataBases</h3>
    </div>
    <br/>
    <div id="DatabaseGrid">
      <div>
        <img src={mySQL} alt="mySQL logo"/>
        <figcaption>MySQL</figcaption>
      </div>
      <div>
        <img src={MongoDB} alt="MongoDB logo"/>
        <figcaption>MongoDB</figcaption>
      </div>
    </div>


    <br/>


{/* Frameworks section */}
    <div className="skills">
    <h3>Frameworks</h3>
    </div>
    <br/>
    <div id="FrameworkGrid">
      <div>
        <img src={Bootstrap} alt="Bootstrap logo"/>
        <figcaption>Bootstrap</figcaption>
      </div>
      <div>
        <img src={JQuery} alt="JQuery logo"/>
        <figcaption>jQuery</figcaption> {/* Library */}
      </div>
      <div>
        <img src={Nodejs} alt="Node.js logo"/>
        <figcaption>Node.js</figcaption> {/* Tool */}
      </div>
      <div>
        <img src={Expressjs} alt="Expressionjs logo"/>
        <figcaption>Express.js</figcaption>
      </div>
      <div>
        <img src={HandleBarsjs} alt="HandleBars.js logo"/>
        <figcaption>Handlebars.js</figcaption>
      </div>
    </div>

      <br/>

    <div id="FrameworkGrid">
      <div>
        <img src={ReactLogo} alt="React logo"/>
        <figcaption>React</figcaption>
      </div>
      <div>
        <img src={Redux} alt="Redux logo"/>
        <figcaption>Redux</figcaption>
      </div>
    </div>


    <br/>

{/* Tools Section */}
    <div className="skills">
    <h3>Tools</h3>
    </div>
    <br/>
    <div id="ToolsGrid">
      <div>
        <img src={CommdLine} alt="Command Line logo"/>
        <figcaption>Commd Line</figcaption>
      </div>
      <div>
        <img src={DevTools} alt="Developer Tools logo"/>
        <figcaption>Chrome Dev Tools</figcaption>
      </div>
      <div>
        <img src={Git} alt="Git logo"/>
        <figcaption>Git</figcaption>
      </div>
      <div>
        <img src={GitHub} alt="GitHub logo"/>
        <figcaption>GitHub</figcaption>
      </div>
      <div>
        <img src={Postman} alt="Postman logo"/>
        <figcaption>Postman</figcaption>
      </div>
    </div>


    <br/>


    <div id="ToolsGrid">
      <div>
        <img src={Insomnia} alt="Insomina logo"/>
        <figcaption>Insomnia</figcaption>
      </div>
      <div>
        <img src={Ajax} alt="Ajax logo"/>
        <figcaption>AJAX</figcaption>
      </div>
      <div>
        <img src={GraphQL} alt="Html5 logo"/>
        <figcaption>GraphQL</figcaption>
        </div>
        <div>
        <img src={Apollo} alt="Html5 logo"/>
        <figcaption>Apollo</figcaption>
      </div>
    </div>

    <br></br>


      </div>
<GoToTop/>
</div>
    </>
  );
};

export default About;

