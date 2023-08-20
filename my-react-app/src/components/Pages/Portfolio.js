import React from "react";
import "./Portfolio.css";
import Emojify from "../Assets/Emojify project.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {

    return (
        <>
<div className="portfolio-container">
    <h1 className="text-center"> Projects </h1>
    <br></br>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Emojify Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 ">Emojify</h5>
                    <p className="card-text fs-6 ">
                    This app helps users choose movies more easily based on their emotions expressed through emojis.
                     Emojis are connected to genres (e.g., Skull for horror). Users pick emojis, get movie suggestions,
                      and can also explore past recommendations.
                      </p>
                    <div className="d-grid gap-2 mt-auto">
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://samhiga.github.io/emojify/")}>
                            Deployed Site
                        </button>
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://github.com/samhiga/emojify")}>
                            Repository
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 text-truncate">Another Project</h5>
                    <p className="card-text fs-6 text-truncate"> hello</p>
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
        </div>
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 text-truncate">Another Project</h5>
                    <p className="card-text fs-6 text-truncate"> hello</p>
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
        </div>
    </div>


    <br></br>


    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Emojify Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 ">Emojify</h5>
                    <p className="card-text fs-6 ">
                    This app helps users choose movies more easily based on their emotions expressed through emojis.
                     Emojis are connected to genres (e.g., Skull for horror). Users pick emojis, get movie suggestions,
                      and can also explore past recommendations.
                      </p>
                    <div className="d-grid gap-2 mt-auto">
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://samhiga.github.io/emojify/")}>
                            Deployed Site
                        </button>
                        <button className="btn btn-light" type="button" onClick={() => (window.location.href = "https://github.com/samhiga/emojify")}>
                            Repository
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 text-truncate">Another Project</h5>
                    <p className="card-text fs-6 text-truncate"> hello</p>
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
        </div>
        <div className="col">
            <div className="card bg-success h-100 overflow-hidden d-flex flex-column">
                <img src={Emojify} className="card-img-top" alt="Another Project" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-4 text-truncate">Another Project</h5>
                    <p className="card-text fs-6 text-truncate"> hello</p>
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
        </div>
    </div>
</div>

<br></br>

 </>
    );
};

export default Portfolio;
