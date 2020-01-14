import React from 'react';
import Navbar from '../components/Navbar'
import LoginMain from '../components/LoginMain'
import Footer from '../components/Footer'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/ionicons.min.css'
import '../assets/css/Contact-Form-Clean.css'
import '../assets/css/Footer-Dark.css'
import '../assets/css/Login-Form-Dark.css'
import '../assets/css/Navigation-with-Button.css'
import '../assets/css/styles.css'
import 'bootstrap/dist/js/bootstrap.js'

function Login() {
  return (
    <div className="Login">
      <Navbar/>
      <LoginMain/>
      <Footer/>
    </div>
  );
}

export default Login;