import React from "react";
import { connect } from "react-redux";
import { changePopoverState } from "../../ActionsCreator/Actions"

class EditProfile extends React.Component {
    render() {
        return (
            <div className="layover">
                <div className="container-fluid h-100">
                    <div className="row justify-content-center align-content-center h-100">
                        <div className="col-md-3 border">
                            <div class="form-outline">
                                <input type="text" id="typeText" class="form-control" />
                                <label class="form-label" for="typeText">Text input</label>
                            </div>
                            <div class="form-outline">
                                <input type="email" id="typeEmail" class="form-control" />
                                <label class="form-label" for="typeEmail">Email input</label>
                            </div>
                        </div>
                        <div className="col-md-3 border">
                            <div class="form-outline">
                                <input type="number" id="typeNumber" class="form-control" />
                                <label class="form-label" for="typeNumber">Phone Number</label>
                            </div>
                        </div>  
                    </div>
                </div>
                <button className="btn btn-secondary d-abs-tl" onClick={() => this.props.changePopoverState("CLOSE_EDIT_PROFILE")}>close_modal</button>
            </div>
        )
    }
}

export default connect(null, {
    changePopoverState
})(EditProfile);