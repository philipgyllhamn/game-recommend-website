import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/ionicons.min.css'
import '../assets/css/Contact-Form-Clean.css'
import '../assets/css/Footer-Dark.css'
import '../assets/css/Login-Form-Dark.css'
import '../assets/css/Navigation-with-Button.css'
import '../assets/css/styles.css'

class Navbar extends React.Component {
   render(){
       return(
        <nav class="navbar navbar-light navbar-expand-md bg-dark navigation-clean-button">
        <div class="container"><a class="navbar-brand text-white">Game Recommend</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav mr-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link text-white" href="/">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-white">User Lists</a></li>
                </ul><span class="navbar-text actions"> <a class="btn btn-light action-button" role="button" href='/Login' >Login</a></span></div>
            </div>
        </nav>
       );
   };
}

export default Navbar;

