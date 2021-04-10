import React from 'react';
import myimg from './myimg.jpg'
import address from './address.png'
import email from './email.png'
import phone from './phone.png'

function Resume(){
    return(
        <div className="Resume">
            <img className="Resume_img" src={myimg} alt="myimage"/>
            <div className="Resume_name">
                <b>Kamontip</b> <br/> Koopiamrug
            </div>
            <div className="Resume_contact">
                <h3 className="title">Contact</h3>               
                <p> <img className="icon" src={address} alt="address"/>Phutthabucha , Bangmod , Thungkru , Bangkok , 10140</p>
                <p> <img className="icon" src={email} alt="email"/>kamontip.kpr@gmail.com</p>
                <p> <img className="icon" src={phone} alt="phone"/>082-212-8661</p>    
            </div>
            <div className="Resume_objtive">
                <h3 className="title">Objective</h3>
                <p>I intend to work as a Full-Stack Developer to become a proficient developer in the future.
                    So I would like to learn a real work process in positive environment that enhance my knowledge, abilities, skills and also requires problem solving skills to accomplishing projects and grow in this field of work.</p>
            </div>
            <div className="Resume_skills">
                <h3 className="title">Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>C#</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Git</li>
                </ul>
            </div>
            <div className="Resume_education">
                <h3 className="title">Education</h3>
                <ul>
                    <li>College : King Mongkut's University of Technology Thonburi in Media Technology (GPAX 3.4)</li>
                    <li>High School : Suankularb Wittayalai Thonburi School in Math-Eng (MEP)</li>
                </ul>
            </div>
            <div className="Resume_activities">
                <h3 className="title">Activities</h3>
                <ul>
                    <li>Pre-Programming Workshop</li>
                    <li>I-Dia Camp</li>
                    <li>ModTech Camp</li>
                </ul>
            </div>
            <div className="Resume_exp">
                <h3 className="title">Experience in Class</h3>
                <ul>
                    <li>Web Programming</li>
                    <li>Computer Programming for Media</li>
                    <li>Data Communication and Computer Networks</li>
                    <li>Data Structure and Algorithms for Game Development</li>
                    <li>Game Design and Development</li>                    
                    <li>Graphic Media Design</li>
                    <li>Interface Psychology</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;