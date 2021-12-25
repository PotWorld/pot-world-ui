import React from "react";
import { changePopoverState } from "../ActionsCreator/Actions"
import {connect} from "react-redux";

class UserInfo extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="flex-container">
                <img className="images pot-logo" src="/POT.png" alt="add the product image" />
                <div className="edit-profile">
                <img className="profile" onClick={() => this.props.changePopoverState("OPEN_EDIT_PROFILE")} alt="user profile logo"/>   
                </div>
            </div>
        )
    }
}

export default connect(null, {
    changePopoverState
})(UserInfo);
