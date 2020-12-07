import React from 'react';
import '../Projects/Projects.css';
// npm install --save-dev @iconify/react @iconify/icons-el
import { Icon } from '@iconify/react';
import playCircle from '@iconify/icons-el/play-circle';
// npm install --save-dev @iconify/react @iconify/icons-bx
import bxCodeAlt from '@iconify/icons-bx/bx-code-alt';
//import Buttons from '../Buttons';
import dataLovers from '../../img/dataLovers.jpg';
import burgerQueen2 from '../../img/burgerQueen2.jpg';
import comidaparatodos from '../../img/comidaparatodos.jpg';

const Projects = () => {
    return (
        <div id="proyectos" className="container-projects">
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
                <div className="container-buttons">
             <div className="firstButton">
             <a href="https://danielablancom.github.io/SCL014-data-lovers/src/index.html" target="_blank">
            <button className="button-style"><Icon icon={playCircle} className="iconPlay"/>DEMO
            </button>
            </a>
            </div>
            <div className="firstButton"> 
            <a href="https://github.com/danielablancom/SCL014-data-lovers" target="_blank">
            <button className="button-style"><Icon icon={bxCodeAlt} className="iconPlay"/>
                CODE
            </button>
            </a>
            </div>
        </div>
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

                <p className="project-description">Burger Queen es un software gastronómico de comandas diseñado para tablet. El diseño y desarrollo se realizó con JavaScript, CSS, Reactjs y se almacenó la información en Firebase. </p>
                <div className="container-buttons">
             <div className="firstButton">
             <a href="https://burger-queen-5875a.web.app" target="_blank">
            <button className="button-style"><Icon icon={playCircle} className="iconPlay"/>DEMO
            </button>
            </a>
            </div>
            <div className="firstButton"> 
            <a href="https://github.com/danielablancom/burger-queen" target="_blank">
            <button className="button-style"><Icon icon={bxCodeAlt} className="iconPlay"/>
                CODE
            </button>
            </a>
            </div>
        </div>
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

                <p className="project-description">Comida para todos es una fundación sin fines de lucro que busca salvaguardar la seguridad alimentaria en Chile. Se desarrolló re diseño de plataforma web utilizando React, JavaScript y Sass.</p>
                <div className="container-buttons">
             <div className="firstButton">
             <a href="https://comida-para-todos-9fe1e.web.app/" target="_blank">
            <button className="button-style"><Icon icon={playCircle} className="iconPlay"/>DEMO
            </button>
            </a>
            </div>
            <div className="firstButton"> 
            <a href="https://github.com/danielablancom/comida-para-todos-" target="_blank">
            <button className="button-style"><Icon icon={bxCodeAlt} className="iconPlay"/>
                CODE
            </button>
            </a>
            </div>
        </div>
            </div>
            </div>
            
        </div>
    );
}

export default Projects; 