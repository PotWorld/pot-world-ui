import React from "react";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";
import MainComponent from "./MainComponent";
import {BrowserRouter} from "react-router-dom";
import PopoverComponent from "./PopoverComponent";

class Pot extends React.Component {

    render(){
        return(
            <div className="container-fluid">
                <div className="row main-header">
                    <UserInfo/>
                </div>
                <div className="row">
                    <BrowserRouter>
                        <div className="col-md-2">
                            <Navbar/>
                        </div>
                        <div className="col-md-10">
                            <MainComponent/>
                        </div>
                    </BrowserRouter>    
                </div>
                <PopoverComponent />
            </div>
        )
    }
}

export default Pot;