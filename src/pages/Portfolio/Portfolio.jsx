import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
    return (
        <div className="container mt-3">
            <div className="row">
            </div>
            <div className="col-lg-12">
            </div>
            <h1 className="display-4">Portfolio</h1>
            <hr className="my-4">
                <div className="row">
                    <div className="col-sm-6">
                        <p><a href="https://evening-headland-02577.herokuapp.com/">Wavelength</a></p>
                        <img src="./assets/images/Home.jpg" className="m-1"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p><a href="https://kevinb04.github.io/day-planner/" alt="Day Planner">Day Planner</a></p>
                        <img src="./assets/images/Daily Planner.jpg" className="m-1"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p><a href="https://kevinb04.github.io/horiseon-seo/">Horiseon</a></p>
                    </div>
                </div>
            </hr>
        </div>
    );
};

export default Portfolio;