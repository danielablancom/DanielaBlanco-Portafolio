import React from 'react';
import '../Logo/Logo.css';
import DataLovers from '../../img/DataLovers.jpg';

const Logo = () => {
    return (
        <div className="container-logo">
            <div className="container-img">
                <img src={DataLovers} className="img-logo" alt={"img-logo"}></img>
            </div>
            <div className="title-logo">

                <p className="title-ocupation">Front-end Developer / Violinista</p>
                
            </div>
        </div>
    );
}

export default Logo; 