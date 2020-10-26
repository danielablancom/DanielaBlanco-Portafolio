import React from 'react';
import '../AboutMe/AboutMe.css';
import DataLovers from '../../img/DataLovers.jpg';

const AboutMe = () => {
    return (
        <div className="container-aboutMe">
            <div className="principal-title-aboutMe">
            <p className="">Acerca de mi</p>
           </div>
            <div className="container-img-aboutMe">
                <img src={DataLovers} className="img-aboutMe" alt={"img-aboutMe"}></img>
            </div>
            <div className="title-aboutMe">

                <p className="text-aboutMe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
            </div>
        </div>
    );
}

export default AboutMe; 