import React from "react";
import { connect } from "react-redux";
import { changePopoverState } from "../../ActionsCreator/Actions"

class EditProfile extends React.Component {
    render() {
        return (
            <div className="layover">
                EditProfile is active now,
                <button onClick={() => this.props.changePopoverState("CLOSE_EDIT_PROFILE")}>close_modal</button>
            </div>
        )
    }
}

export default connect(null, {
    changePopoverState
})(EditProfile);