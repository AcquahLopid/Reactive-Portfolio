// import React from "react";
// import "../Pages/About.css";
// import myPicture from "../Assets/Emanuel-blossom.jpg";

// const About = () => {
//   return (
    
//     <>
//         <picture>
//             <source media="(min-width: 650px)" srcSet={myPicture}/>
//             <source media="(min-width: 465px)" srcSet={myPicture}/>
//             <img src={myPicture} alt="Emanuel Molina" className="myself"/>
//         </picture>
//         <div className="container">
//             <h1 className="title">Full Stack Developer</h1>
//         <div className="About-card">
//             <h2 className="subtitle">About Me</h2>
//             <p className="text">
//             As a passionate and dedicated developer, I embarked on an intensive journey 
//             to enhance my skills and accelerate my career through a rigorous bootcamp
//             program. With great determination and unwavering commitment, I successfully
//             earned a certificate that validated my expertise in the field. 
//             This transformative experience equipped me with a solid foundation 
//             in various programming languages, frameworks, and development methodologies.
//             Through hands-on projects and collaborative learning, I honed my 
//             problem-solving abilities and gained practical experience in building 
//             robust and innovative software solutions. Armed with this certificate 
//             and an insatiable thirst for knowledge, I am now ready to contribute
//             my skills to the dynamic world of software development, eager to take
//             on exciting challenges and make a meaningful impact in the industry. Please feel
//             free to look at my past projects, resume, and portfolio, or reach out to me for
//             more information.
//             </p>
//             </div>
//         </div>
//     </>

//   );
// };

// export default About;

import React from "react";
import "../Pages/About.css";
import myPicture from "../Assets/Emanuel-blossom.jpg";

const About = () => {
  return (
    <>
    <div className="container">
      <div className="myself-container">
        <img src={myPicture} alt="Emanuel Molina" className="myself" />
      </div>
      <div className="content">
        <h1 className="title">Full Stack Developer</h1>
        <div className="About-card">
          <h2 className="subtitle">About Me</h2>
          <p className="text">
            As a passionate and dedicated developer, I went through an intensive journey 
            to enhance my skills and advance my career through a bootcamp
            program. With great determination and commitment, I successfully
            earned a certificate that validated my expertise in the field. 
            This experience equipped me with a solid foundation 
            in various programming languages, frameworks, and development methods.
            Through hands-on projects and collaborative learning, I enhanced my 
            problem-solving abilities and gained practical experience in building 
            innovative software solutions. With this certificate 
            and an insatiable thirst for knowledge, I am now ready to contribute
            my skills to the dynamic world of software development, eager to take
            on exciting challenges and make a meaningful impact in the industry. Please feel
            free to look at my past projects, resume, and portfolio, or reach out to me for
            more information.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

