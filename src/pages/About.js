import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InfoMain from '../components/InfoMain'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/ionicons.min.css'
import '../assets/css/Contact-Form-Clean.css'
import '../assets/css/Footer-Dark.css'
import '../assets/css/Login-Form-Dark.css'
import '../assets/css/Navigation-with-Button.css'
import '../assets/css/styles.css'
import 'bootstrap/dist/js/bootstrap.js'


function About() {
  return (
    <div className="Login">
      <Navbar/>
      <InfoMain/>
      <Footer/>
    </div>
  );
}

export default About;