import React from 'react';
import regis from './Assignments/1_register.mp4';
import chat from './Assignments/2_chat.mp4';
import boxgame from './Assignments/3_boxgame.mp4';

function Assignments(){
    return(
        <div className="Assignments">
            <h2>Assignments in class</h2>
            <div className="Assign_items">
                <p className="explan">- Register and Login system (using HTML , CSS , JavaScript)</p>
                <video width="1000" height="562.5" controls>
                    <source src={regis} type="video/mp4" alt="register"/>
                </video>

                <p className="explan">- Blog (using HTML , CSS , JavaScript)</p>
                <video width="1000" height="562.5" controls>
                    <source src={chat} type="video/mp4" alt="chatinblog"/>
                </video>

                <p className="explan">- Easy Box game (using HTML , CSS , JavaScript)</p>
                <video width="1000" height="562.5" controls>
                    <source src={boxgame} type="video/mp4" alt="boxgame"/>
                </video>
            </div>
        </div>
    )
}

export default Assignments;