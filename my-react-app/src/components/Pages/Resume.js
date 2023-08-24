import React from "react";
import "./Resume.css";
import ResumePDF from "../Assets/EmanuelResume.pdf";
import GoToTop from '../Utils/GoToTop';

const Resume = () => {
  // const [resumeUrl, setResumeUrl] = useState(ResumePDF);

  const handleDownload = () => {
    // this Opens the resume PDF in a new tab for download
    window.open(ResumePDF);
  };


  return (
    <div className="Resume">
    <div className="resume-container">
      <div className="personal-info">
        <div className="contact-info">
          <h1>Emanuel Molina</h1>
          <p>+1-510-641-8910</p>
          <p>Emanuel.molina2k@gmail.com</p>
          <p>Bloomington, IL 61704</p>
          <p>Authorized to work in the US for any employer</p>
            <button id="btn" onClick={handleDownload}><i className="fa fa-download"></i>
              Download Resume
            </button>
        </div>
      </div>
      <div className="resume-details">
        <section className="resume-section">
          <h1><strong>Summary</strong></h1>
          <hr/>
          <p>
            As an entry-level web developer, I'm eager to find a job where I can
            use my coding and design skills. I know both front-end and back-end
            technologies well and can create websites and web applications that
            are user-friendly and look great. My goal is to make digital
            experiences that meet both user needs and business goals. I'm
            excited to take on new challenges, learn many new techniques, and
            work with others who share my passion for web development.
          </p>
        </section>
        <section className="resume-section">
          <h1><strong>Work Experience</strong></h1>
          <hr/>
          <div className="resume-entry">
            <h3>Assistant Manager</h3>
            <p className="resume-date">May 2021 - July 2023</p>
            <p>
              RIALTO CINEMAS - El Cerrito, CA
              <br />
              - Served food and alcohol
              <br />
              - Resolved customer issues to their overall satisfaction
              <br />
              - Wrote reports and counted money (safe, tills, deposits, tips) daily
              <br />
              - Did inventory counts monthly and made orders for beer and wine
              <br />
              - Helped verify employee schedules
              <br />
              - Ran shifts and delegated duties to the staff
              <br />
              - Worked with fellow managers to upkeep the operations of the
              theater
            </p>
          </div>
          <div className="resume-entry">
            <h3>Stocker</h3>
            <p className="resume-date">August 2018 - June 2019</p>
            <p>
              Grocery Outlet - Richmond, CA
              <br />
              - Operated manual pallet jacks, safely relocating heavy merchandise
                on sales floor for timely stocking
              <br />
              - Evaluated supplies and product inventory to check for quality and
                quantity issues and returned unacceptable materials to vendors
              <br />
              - Moved and lifted heavy loads of merchandise using pallet jack
                equipment
              <br />
              - Removed all debris and packaging from boxes and separated for
                recycling or disposal
              <br />
              - Consistently lifted materials weighing as much as 50 pounds
              <br />
              - Collaborated with backroom and receiving team, working night
                shifts to support inventory fulfillment goals
            </p>
          </div>
        </section>
        <section className="resume-section">
          <h1>Education</h1>
          <hr/>
          <div className="resume-entry">
            <h3>Certification in Web Development</h3>
            <p className="resume-date">March 2023 - June 2023</p>
            <p>UC Berkeley Extensions</p>
          </div>
          <div className="resume-entry">
            <h3>High School Diploma</h3>
            <p className="resume-date">June 2018</p>
            <p>El Cerrito High School - El Cerrito, CA</p>
          </div>
        </section>
        <section className="resume-section">
          <h1>Skills</h1>
          <hr/>
          <ul>

            <li>Management</li>
            <li>Shipping & Receiving</li>
            <li>Microsoft Excel - 3 years</li>
            <li>Microsoft Word</li>
            <li>Full-stack development - 1 year</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>REST</li>
            <li>AJAX</li>
            <li>Git</li>
            <li>JSON</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>APIs</li>
            <li>Node.js</li>
          </ul>
        </section>
        <section className="resume-section">
          <h1>Languages</h1>
          <hr/>
          <p>English - Expert</p>
          <p>Japanese - Intermediate</p>
        </section>
      </div>
    </div>
    <br/>
  <GoToTop/>
  </div>
  );
};

export default Resume;
