import React from 'react';
import joji from './Projects/GoJoji_Trim.mp4';

function Projects(){
    return(
        <div className="Projects">
            <h2>Projects</h2>
            <div className="Projects_items">
                <p className="explan">- Joji is an Online Game (using C# , Unity)</p>
                <video width="1000" height="562.5" controls>
                    <source src={joji} type="video/mp4" alt="onlinegame"/>
                </video>

                <p className="explan"><i>...the other projects are coming...</i></p>
            </div>
        </div>
    )
}

export default Projects;