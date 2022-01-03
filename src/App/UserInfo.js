import React from "react";
import { changePopoverState, searchProducts } from "../ActionsCreator/Actions"
import {connect} from "react-redux";
import SearchComponent from "./Component/SearchComponent"

class UserInfo extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="flex-container">
                <div className="col-md-2">
                    <img className="images pot-logo" src="/POT.png" alt="add the product image" />
                </div>
                <div className="col-md-1">
                    <i class="bi bi-person-circle" style={{fontSize: "3rem", color: "cornflowerblue", cursor: "pointer"}} onClick={() => this.props.changePopoverState("OPEN_EDIT_PROFILE")}></i>
                </div>
                <div className="col-md-3 mt-3">
                    <SearchComponent handleOnchange = {this.props.searchProducts}/>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    changePopoverState,
    searchProducts,
})(UserInfo);
