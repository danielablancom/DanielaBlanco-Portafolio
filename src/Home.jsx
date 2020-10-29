import React, {Fragment} from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Tools from './Components/Tools/Tools';
import Logo from './Components/Logo/Logo';
import NavBar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import './index.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

//import '../Navbar/Navbar.css';

const Home = () => {
    return (
        <Fragment>
       <NavBar />
       <Logo />
       <AboutMe />
       <Projects />
       <Tools />
       <Contact />
       <Footer />
        </Fragment>
    );
}

export default Home; 