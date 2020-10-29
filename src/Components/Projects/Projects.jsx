import React from 'react';
import '../Projects/Projects.css';
import Buttons from '../Buttons';
import dataLovers from '../../img/dataLovers.jpg';
import burgerQueen2 from '../../img/burgerQueen2.jpg';
import comidaparatodos from '../../img/comidaparatodos.jpg';

const Projects = () => {
    return (
        <div className="container-projects">
            <div className="title-projects">
                <p>Proyectos Realizados</p>
            </div>
            <div className="box-projects"> 
            <div className="container-img-projects">
                <img src={dataLovers} className="img-projects" alt={"data-lovers"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Wizards Unite / Data Lovers</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Wizards Unite es una App Web basada en el juego que lleva el mismo nombre donde usuarios pueden hacer búsquedas en tiempo real de sus personajes favoritos, filtrar y ordenar los datos, ya sea por orden alfabético o género. </p>
                <Buttons />
            </div>
            </div>
            
            <div className="box-projects"> 
            <div className="container-img-projects">
                <img src={burgerQueen2} className="img-projects" alt={"burgerQueen"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Burger Queen</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Burger Queen es un software gastronómico de comandas para restaurantes. El diseño y desarrollo se realizó con JavaScript, CSS, Reactjs y se almacenó la información en Firebase.</p>
                <Buttons />
            </div>
            
            </div>
            
            <div className="box-projects">
            <div className="container-img-projects">
                <img src={comidaparatodos} className="img-projects" alt={"comidaparatodos"}></img>
            </div>
            <div className="container-title-project">

                <p className="project-name">Comida para todos</p>

            </div>
            <div className="container-title-project">

                <p className="project-description">Comida para todos en una fundación sin fines de lucro que busca salvaguardar la seguridad alimentaria en Chile. Se desarrolló re diseño de plataforma web utilizando React, JavaScript y Sass.</p>
                <Buttons />
            </div>
            </div>
            
        </div>
    );
}

export default Projects; 