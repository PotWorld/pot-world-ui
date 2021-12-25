import React from "react";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";
import MainComponent from "./MainComponent";
import {BrowserRouter} from "react-router-dom";
import PopoverComponent from "./PopoverComponent";

class Pot extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="row main-header">
                    <UserInfo/>
                </div>
                <div className="row flex-container">
                    <BrowserRouter>
                        <div className="col navbar">
                            <Navbar/>
                        </div>
                        <div className="col main-component">
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