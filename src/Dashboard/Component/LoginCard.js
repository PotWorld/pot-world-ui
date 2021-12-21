import React from "react";
import {enabledLogged} from "../../App";

class LoginCard extends React.Component {

    enabledLogged1() {
        enabledLogged();
    }

    onClose = () => {
        this.props.closeCard("showLoginCard");
    }

    render() {
        return(
            <div className="login-card overlay">  
                <div className="profile-card-container">
                    "show username"
                    <br/>
                    <br/>
                    "show password"
                    <br />
                    <br />
                    <button className="button" onClick={() => this.enabledLogged1()}>
                        "sucessfully logged in..."
                    </button>
                    <br />
                    <br />
                    <button onClick={this.onClose}>
                        "close"
                     </button>   
                    <br/>
                    <br/>
                </div> 
            </div>
        )
    }
}

export default LoginCard;
