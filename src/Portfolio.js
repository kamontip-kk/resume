import React from 'react';
import Assignments from './Assignments';
import Practice from './Practice';
import Projects from './Projects';

function Portfolio(){
    return(
        <div className="Portfolio">
            <Assignments/>
            <Practice/>
            <Projects/>
            <div className="Port_button">
                <a id="butToTop" href="#top">Go to Top</a>
            </div>
        </div>
    )
}

export default Portfolio;