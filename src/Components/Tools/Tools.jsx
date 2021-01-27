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
                <div>
                    <p className="text-icon-tools">Html</p>
                </div>
            </div>    
            <div className="icon-box">
                <img src={css} className="img-tools" alt={"css"}></img>
                <div>
                    <p className="text-icon-tools">CSS</p>
                </div>
            </div>
              
            <div className="icon-box">
                <img src={javascript} className="img-tools" alt={"javascript"}></img>
                <div>
                    <p className="text-icon-tools">JavaScript</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={react} className="img-tools" alt={"react"}></img>
                <div>
                    <p className="text-icon-tools">React</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={firebase} className="img-tools" alt={"firebase"}></img>
                <div>
                    <p className="text-icon-tools">Firebase</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={sass} className="img-tools" alt={"sass"}></img>
                <div>
                    <p className="text-icon-tools">Sass</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={git} className="img-tools" alt={"git"}></img>
                <div>
                    <p className="text-icon-tools">Git</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={github} className="img-tools" alt={"github"}></img>
                <div>
                    <p className="text-icon-tools">GitHub</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={figma} className="img-tools" alt={"figma"}></img>
                <div>
                    <p className="text-icon-tools">Figma</p>
                </div>
            </div>
            <div className="icon-box">
                <img src={adobep} className="img-tools" alt={"adobep"}></img>
                <div>
                    <p className="text-icon-tools">Photoshop</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Tools; 