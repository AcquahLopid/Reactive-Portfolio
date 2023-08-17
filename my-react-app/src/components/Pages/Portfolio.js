import React, {useEffect} from "react";
import "./Portfolio.css";
import Emojify from "../Assets/Emojify project.png"
import AOS from 'aos';
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

      }, []);

    return (
        <>
        {/* <div className="portfolio-container">
        <h1 className="text-center"> Projects </h1>
        <ul data-aos="fade-right" data-aos-duration="3000">
            <li data-aos="fade-right" data-aos-duration="3000">
                <div className="card bg-success">
                    <img src={Emojify} className="card-img-top" alt="Project" />
                    <div className="card-body">
                        <h5 className="card-title fs-3 text">Emojify</h5>
                        <p className="card-text fs-5 text">There are thousands of movies available for streaming. Users 
                         end up spending hours to pick a movie. This app makes it easier for users to decide on a movie based 
                         on user's moods and inclinations that are expressed through emojis.The user is presented with emojis 
                         to pick from and the algorithm recommends a list of movies. If the user ever wants to look at their 
                         past movie suggestions, they have option to do so as well.</p>
                        <div className="d-grid gap-3 col-6 mx-auto">
                        <button className="btn btn-primary" type="button">Deployed Site</button>
                        <button className="btn btn-primary" type="button">Repository</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div> */}
 </>
    );
};

export default Portfolio;