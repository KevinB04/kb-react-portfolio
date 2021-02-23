import React from "react";
import { HashRouter as Router, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./src/pages/Home/Home">Kevin Buttimer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                </button>

            <section className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">About<span className="sr-only"></span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>        
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Header;