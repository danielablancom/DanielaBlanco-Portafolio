import React from 'react';
import './Tools.css';
import html from '../../iconos/html.png';
import css from '../../iconos/css.png';
import javascript from '../../iconos/javascript.png';
import react from '../../iconos/react.png';
import firebase from '../../iconos/firebase.png';
import sass from '../../iconos/sass.png';
import git from '../../iconos/git.png';
import github from '../../iconos/github.png';
import figma from '../../iconos/figma.png';
import adobep from '../../iconos/adobep.png';


const Tools = () => {
    return (
        <div className="container-tools">
            <div className="title-tools">
                <p>Herramientas Tecnológicas</p>
            </div>
            <div className="container-icon-tools">
                
            <div className="icon-box">
                <img src={html} className="img-tools" alt={"html"}></img>
            </div>    
            <div className="icon-box">
                <img src={css} className="img-tools" alt={"css"}></img>
            </div>
              
            <div className="icon-box">
                <img src={javascript} className="img-tools" alt={"javascript"}></img>
            </div>
            <div className="icon-box">
                <img src={react} className="img-tools" alt={"react"}></img>
            </div>
            <div className="icon-box">
                <img src={firebase} className="img-tools" alt={"firebase"}></img>
            </div>
            <div className="icon-box">
                <img src={sass} className="img-tools" alt={"sass"}></img>
            </div>
            <div className="icon-box">
                <img src={git} className="img-tools" alt={"git"}></img>
            </div>
            <div className="icon-box">
                <img src={github} className="img-tools" alt={"github"}></img>
            </div>
            <div className="icon-box">
                <img src={figma} className="img-tools" alt={"figma"}></img>
            </div>
            <div className="icon-box">
                <img src={adobep} className="img-tools" alt={"adobep"}></img>
            </div>
            </div>
        </div>
    );
}

export default Tools; 