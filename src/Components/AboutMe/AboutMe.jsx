import React from 'react';
import '../AboutMe/AboutMe.css';
import daniela1 from '../../img/daniela1.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div id="acercademi" className="container-aboutMe">
            <div className="principal-title-aboutMe">
            <p className="">Acerca de mi</p>
           </div>
            <div className="container-img-aboutMe">
                <img src={daniela1} className="img-aboutMe" alt={"img-aboutMe"}></img>
            </div>
            <div className="title-aboutMe">

                <p className="text-aboutMe">Hola! Yo soy Daniela Blanco, Desarrolladora Front-end y Violinista, apasionada por la musica, los animales y la tecnología. Me considero una autodidacta nata en busca de nuevos retos y desafíos dentro del desarrollo y el diseño web. Mi meta es desarrollar interfaces y software en distintos lenguajes de programacion, por esto creo que convertirme en una profesional integral con un perfil híbrido me ayudará a comprender en mayor profundidad el mundo tech y obtener las habilidades necesarias para encontrar soluciones innovadoras. Descarga mi<Link to="./Cv/Daniela Blanco CV.pdf"> <button className="button-cv" type="button">CV</button></Link></p>
                
            </div>
        </div>
    );
}

export default AboutMe; 