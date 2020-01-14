import React from 'react';
import logo from '../assets/img/co1rh8.jpg'

export default class ContentDisplay extends React.Component {
    render(){
        return(
            <div class="col-md-8" style={{height: "698px",marginTop: "50px",textAlign: "center"}}>
                    <div class="card mb-3" style={{maxWidth: "540px"}} >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={logo} class="card-img" width="200px" alt="coverart"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}