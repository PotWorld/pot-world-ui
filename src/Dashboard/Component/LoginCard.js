import React from "react";

class LoginCard extends React.Component {

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
                    <button className="button">
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
