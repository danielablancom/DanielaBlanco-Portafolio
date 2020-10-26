import React, {Fragment} from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Logo from './Components/Logo/Logo';
import NavBar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import './index.css';

//import '../Navbar/Navbar.css';

const Home = () => {
    return (
        <Fragment>
       <NavBar />
       <Logo />
       <AboutMe />
       <Projects />

        </Fragment>
    );
}

export default Home; 