import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="wrapper">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;