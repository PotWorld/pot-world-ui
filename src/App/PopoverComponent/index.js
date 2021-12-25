import React from "react";
import EditProfile from "./EditProfile"
import { connect } from "react-redux";

class Popover extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                {this.props.EDIT_PROFILE && <EditProfile />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        EDIT_PROFILE: state.changePopoverState && state.changePopoverState['EDIT_PROFILE'],
    }
}

export default connect(mapStateToProps)(Popover);