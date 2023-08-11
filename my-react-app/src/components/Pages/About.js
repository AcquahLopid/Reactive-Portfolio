import React from "react";
import "../Pages/About.css";
import myPicture from "../Assets/Emanuel-blossom.jpg";
import Html5 from "../Assets/html5.png";
import lineBar from "../Assets/pngwing.png"

const About = () => {
  return (
    <>
    <section className="container"> 
      <div className="pictureTitle">
        <img src={myPicture} alt="Emanuel Molina" className="myPicture" />
        <h1 className="title">Full Stack Developer</h1>
      </div>
      <div className="aboutText">
          <h2>About Me</h2>
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
    <div className="lang">
    <img src={lineBar} alt="blue line"/>
    <h3>Languages</h3>
    <img src={lineBar} alt="blue line"/>
    </div>
    <div id="grid">
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
      <div>
        <img src={Html5} alt="Html5 logo"/>
        <figcaption>Html5</figcaption>
      </div>
    </div>
    </>
  );
};

export default About;

