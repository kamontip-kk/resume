import React from 'react';
import Assignments from './Assignments';
import Practice from './Practice';
import Projects from './Projects';

function Portfolio(){
    return(
        <div className="Portfolio">
            <Projects/> <br/>
            <Assignments/> <br/>
            <Practice/> <br/>
            <div className="Port_button">
                <a id="butToTop" href="#">Go to Top</a>
            </div>
        </div>
    )
}

export default Portfolio;