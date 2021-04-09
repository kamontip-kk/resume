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
        </div>
    )
}

export default Portfolio;