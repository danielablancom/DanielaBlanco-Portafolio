import React from 'react';
import '../Navbar/Navbar.css';

const NavBar = () => {
    return (
        <div className="container-navbar">
            <div>
                <h5>Daniela Blanco</h5>
            </div>
            <div className="links-navbar">

                <a className="links-navbar" href="/#acercademi">Acerca de mi</a>
                <a className="links-navbar" href="/#proyectos">Proyectos</a>
                <a className="links-navbar" href="/#contacto">Contacto</a>


            </div>
        </div>
    );
}

export default NavBar; 