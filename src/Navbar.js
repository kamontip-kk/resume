import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
    <header className="Navbar">
        <h1>Welcome</h1>
        <div className="Navbar_items">
            <Link to="/resume" className="_item">Resume</Link>
            <Link to="/resume/portfolio" className="_item">Portfolio</Link>
        </div>
    </header>
    )
}

export default Navbar;