import React from 'react';
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer'
import './App.css';
import '../src/assets/bootstrap/css/bootstrap.min.css'
import '../src/assets/fonts/ionicons.min.css'
import '../src/assets/css/Contact-Form-Clean.css'
import '../src/assets/css/Footer-Dark.css'
import '../src/assets/css/Login-Form-Dark.css'
import '../src/assets/css/Navigation-with-Button.css'
import '../src/assets/css/styles.css'
import 'bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
