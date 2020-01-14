import React from 'react';

export default class InfoMain extends React.Component {


    render(){
        return(
        <div>
            <div class="highlight-phone">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="intro">
                                <h2>About</h2>
                                <p>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed justo ligula.</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="d-none d-md-block iphone-mockup"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight-phone">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="intro">
                                <h2>Privacy</h2>
                                <p>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed justo ligula.</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="d-none d-md-block iphone-mockup"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-clean" style={{backgroundColor: "rgb(238,244,247)"}}>
                <form method="post">
                <h2 class="text-center">Contact us</h2>
                <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Name"/></div>
                    <div class="form-group"><input class="form-control " type="email" name="email" placeholder="Email"/>
                    </div>
                    <input class="form-control" type="text" style={{marginBottom: "24px"}} placeholder="Subject"/>
                    <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
                    <div class="form-group"><button class="btn btn-primary" type="submit">send </button></div>
                </form>
            </div>
        </div>
        );
    }
}