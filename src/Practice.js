import React from 'react';
import postbook from './Practice/1_postbook.mp4';
import mystagram from './Practice/2_mystagram.mp4';

function Practice(){
    return(
        <div className="Practice">
            <h2>Practice</h2>
            <div className="Practice_items">
                <p className="explan">- Social Media platform (using HTML , CSS ,React.js)</p>
                <video width="1000" height="562.5" controls>
                    <source src={postbook} type="video/mp4" alt="socialmedia"/>
                </video>

                <p className="explan">- Application for searching photos (using HTML , CSS , JavaScript)</p>
                <video width="1000" height="562.5" controls>
                    <source src={mystagram} type="video/mp4" alt="application"/>
                </video>

            </div>
        </div>
    )
}

export default Practice;