import React from 'react'

export default class LoginMain extends React.Component {
    render(){
        return(
            <div class="login-dark" style={{backgroundSize: "cover"}}>
                <form method="post">
                    <h2 class="sr-only">Login Form</h2>
                        <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
                        <p style={{textAlign: "center"}}>Login with any of the below</p>
                        <div class="form-group"><button class="btn btn-primary btn-block" type="button" style={{backgroundColor: "rgb(128,56,33)"}}>Reddit</button><button class="btn btn-primary btn-block" type="button">Facebook</button></div><p class="forgot">Login with either reddit or facebook api</p>
                </form>
            </div>
        );
    }
}