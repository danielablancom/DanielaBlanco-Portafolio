import React from 'react';
import '../Projects/Projects.css';
import DataLovers from '../../img/DataLovers.jpg';
import Buttons from '../Buttons';

const Projects = () => {
    return (
        <div className="container-projects">
            <div className="title-projects">
                <p>Proyectos Realizados</p>
            </div>
            <div className="container-img1">
                <img src={DataLovers} className="img-logo" alt={"img-logo"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Data Lovers</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Buttons />
            </div>
            
           
            <div className="container-img2">
                <img src={DataLovers} className="img-logo" alt={"img-logo"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Burger Queen</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Buttons />
            </div>
            
           
            <div className="container-img3">
                <img src={DataLovers} className="img-logo" alt={"img-logo"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Comida para todos</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Buttons />
            </div>
            
        </div>
    );
}

export default Projects; 