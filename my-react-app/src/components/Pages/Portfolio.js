import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import GoToTop from '../Utils/GoToTop';

// project images
import Emojify from "../Assets/Emojify project.png";
import C2C from "../Assets/C2C Screenshot.png";
import PasswordGen from "../Assets/Password generator.png";
import DayScheduler from "../Assets/Work Day Scheduler Screenshot.png";
import NoteTaker from "../Assets/NoteTakerScreenshot.png";


const Portfolio = () => (
    <>
        <div class="ProjectSec">
            <h1>Projects</h1>
        </div>
        <div className="portfolio-container">
            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card purple-bg h-100 overflow-hidden d-flex flex-column">
                        <img src={Emojify} className="rounded-bottom-4 card-img-top" alt="Emojify Project" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fs-2">Emojify</h5>
                            <p className="card-text fs-4">
                                This app helps users choose movies more easily based on their emotions expressed through emojis.
                                Emojis are connected to genres (e.g., Skull for horror). Users pick emojis, get movie suggestions,
                                and can also explore past recommendations.
                            </p>
                            <div className="d-grid gap-2 mt-auto">
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://samhiga.github.io/emojify/", "_blank", "noopener noreferrer")}>
                                    Deployed Site
                                </button>
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://github.com/AcquahLopid/emojify", "_blank", "noopener noreferrer")}>
                                    Repository
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card purple-bg h-100 overflow-hidden d-flex flex-column">
                        <img src={C2C} className="rounded-bottom-4 card-img-top" alt="C2C Project" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fs-2">C2C</h5>
                            <p className="card-text fs-4 ">
                                Small business website that allows clients to message with business owners. Clients can register or login in
                                with their already created accounts. This website is a good framework for future websites people want to build. <br />
                                (Admin Login: admin@email.com | Password: password) <br /> (Client Login: email1@email.com | Password: password1)
                            </p>
                            <div className="d-grid gap-2 mt-auto">
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://small-business-project-client.herokuapp.com/", "_blank", "noopener noreferrer")}>
                                    Deployed Site
                                </button>
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://github.com/AcquahLopid/small-business-project", "_blank", "noopener noreferrer")}>
                                    Repository
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card purple-bg h-100 overflow-hidden d-flex flex-column">
                        <img src={DayScheduler} className="rounded-bottom-4 card-img-top" alt="Another Project" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fs-2">Work Day Scheduler</h5>
                            <p className="card-text fs-4">
                                The Work Day Scheduler website keeps track of what day and time it currently is. Along with
                                the time there is a page that has hours of the day you are in. The gray hour segements means
                                those hours of that day have passed. The red segment means thats the current hour. The green
                                segments mean those hours of the day have not yet passed. Users are able to edit in these
                                segments and write whatever they want.
                            </p>
                            <div className="d-grid gap-2 mt-auto">
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://acquahlopid.github.io/Work-Scheduler/", "_blank", "noopener noreferrer")}>
                                    Deployed Site
                                </button>
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://github.com/AcquahLopid/Work-Scheduler", "_blank", "noopener noreferrer")}>
                                    Repository
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <br></br>


            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card purple-bg h-100 overflow-hidden d-flex flex-column">
                        <img src={PasswordGen} className="rounded-bottom-4 card-img-top" alt="Password Generator Project" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fs-2">Password Generator</h5>
                            <p className="card-text fs-4">
                                This website helps user make a Passwords. first it ask users to appect conditions of their password.
                                ex. if they want spaces in it, or how long should it be. then the program generates users a password randomly
                                based on their conditions.
                            </p>
                            <div className="d-grid gap-2 mt-auto">
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://acquahlopid.github.io/password-generator/", "_blank", "noopener noreferrer")}>
                                    Deployed Site
                                </button>
                                <button className="btn btn-light" type="button" onClick={() => window.open("https://github.com/AcquahLopid/password-generator", "_blank", "noopener noreferrer")}>
                                    Repository
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col">
            <div className="card purple-bg h-100 overflow-hidden d-flex flex-column">
                <img src={NoteTaker} className="rounded-bottom-4 card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-2">Note Taker</h5>
                    <p className="card-text fs-4">
                        The Note Taker Website allows for users to add notes to it by typing a Note title 
                        and a note text. you can save the note in local storage and also delete it from that 
                        storage aswell.
                    </p>
                    <div className="d-grid gap-2 mt-auto">
                        <button className="btn btn-light" type="button" onClick={() => window.open("https://young-waters-35716.herokuapp.com/", "_blank", "noopener noreferrer")}>
                            Deployed Site
                        </button>
                        <button className="btn btn-light" type="button" onClick={() => window.open("https://github.com/AcquahLopid/note-taker", "_blank", "noopener noreferrer")}>
                            Repository
                        </button>
                    </div>
                </div>
            </div>
        </div>
                {/* <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="rounded-bottom-4 card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-2">Another Project</h5>
                    <p className="card-text fs-4"> hello</p>
                    <div className="d-grid gap-2 mt-auto">
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://another-project-deployed-site/")}>
                            Deployed Site
                        </button>
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://github.com/username/another-project")}>
                            Repository
                        </button>
                    </div>
                </div>
            </div>
        </div> */}
            </div>
        </div>

        <br></br>
        <GoToTop />
    </>
);

export default Portfolio;
