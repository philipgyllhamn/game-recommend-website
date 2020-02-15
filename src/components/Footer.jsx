import React from 'react'

export default class Footer extends React.Component {
    render(){
        return(
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/about">Privacy&nbsp;</a></li>
                                    <li><a href="/about">Contact</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>recommend.ninja</h3>
                                <p>RecommendNinja's goal is to provide you with tips on games you can play based on your preferences. We try our best to provide game recommendations on games that have high ratings and/or high popularity</p>
                            </div>
                        </div>
                        <p class="copyright">Philip Gyllhamn © 2019</p>
                    </div>
                </footer>
            </div>
        );
    }
}