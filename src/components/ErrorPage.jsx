import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/ErrorCss.css'
import logo  from '../assets/img/icons/logo-icon.png'

export default class ErrorPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div class="error-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 ">
                                    <div class="error-text">
                                        <h1 class="error">404 Error</h1>
                                        <img src={logo} alt="site logo"/>
                                        <h4>Oops! This page Could Not Be Found!</h4>
                                        <p>Sorry but the page you are looking for does not exist, have been removed or name changed.</p>
                                        <a href="/" class="btn btn-danger btn-round">Go to homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}
