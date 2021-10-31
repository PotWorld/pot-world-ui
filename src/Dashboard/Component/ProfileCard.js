import React from "react";

class ProfileCard extends React.Component {   
    constructor(props) {
        super(props);
        this.props = props;
        this.showLoginCard = this.showLoginCard.bind(this);
    }
    
    showLoginCard() {
        this.props.showCard("showLoginCard");
        this.props.handleMouseOut();
    }
    
    render() {
        const handleMouseOut = this.props.handleMouseOut;

        return(
            <div className="profile-card overlay"
            onMouseLeave={handleMouseOut}>  
                <div class="profile-card-container">
                    "Hovering over"
                    <br/>
                    <br/>
                    "adding Login"
                    <br />
                    <br />
                    <button className="button" onClick={this.showLoginCard}>
                        "Login"
                    </button>
                    <br/>
                    <br/>
                </div> 
                
            </div>
        )
    }
}

export default ProfileCard;