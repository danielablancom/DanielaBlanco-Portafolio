import React from 'react';
import '../Navbar/Navbar.css';
import logodblanco from '../../img/logodblanco.png'; 

const NavBar = () => {
    return (
        <div className="container-navbar">
            <div className="box-logo-navbar">
            <img src={logodblanco} className="png-logo" alt={"png-logo"}></img>
            </div>
            <div className="links-navbar">

                <a className="links-navbar1" href="/#acercademi">Acerca de mi</a>
                <a className="links-navbar1" href="/#proyectos">Proyectos</a>
                <a className="links-navbar1" href="/#contacto">Contacto</a>


            </div>
        </div>
    );
}

export default NavBar; 