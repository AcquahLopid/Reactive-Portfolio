import React from "react";
import "../Pages/About.css";
import myPicture from "../Assets/Emanuel-blossom.jpg";
import Html5 from "../Assets/html5.png";
import lineBar from "../Assets/pngwing.png";
import CSS from "../Assets/cssLogo.png";

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


    <div className="skills">
    {/* <img src={lineBar} alt="blue line"/> */}
    <h3>Languages</h3>
    {/* <img src={lineBar} alt="blue line"/> */}
    </div>
    <div id="langGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={CSS} alt="Html5 logo"/>
        <figcaption>CSS</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>ES6</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>JSX</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>JSON</figcaption>
      </div>
    </div>


    <br/>


    <div className="skills">
    <img src={lineBar} alt="blue line"/>
    <h3>DataBases</h3>
    <img src={lineBar} alt="blue line"/>
    </div>
    <div id="DatabaseGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>MySQL</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>MongoDB</figcaption>
      </div>
    </div>


    <br/>


    <div className="skills">
    <img src={lineBar} alt="blue line"/>
    <h3>Frameworks</h3>
    <img src={lineBar} alt="blue line"/>
    </div>
    <div id="FrameworkGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Bootstrap</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>jQuery</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Node.js</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Express.js</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Handlebars.js</figcaption>
      </div>

    </div>
    <div id="FrameworkGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>React</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Redux</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Apollo GraphQL</figcaption>
      </div>
    </div>


    <br/>


    <div className="skills">
    <img src={lineBar} alt="blue line"/>
    <h3>Tools</h3>
    <img src={lineBar} alt="blue line"/>
    </div>
    <div id="ToolsGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Commd Line</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Dev Tools</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Git</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>GitHub</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>indexDB</figcaption>
      </div>
    </div>


    <div id="ToolsGrid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Insomnia /Postman</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>AJAX</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Fetch</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>JWT</figcaption>
      </div>
    </div>

    <br></br>


</div>
    </>
  );
};

export default About;

