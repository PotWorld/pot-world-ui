import React from "react";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";
import MainComponent from "./MainComponent";
import {BrowserRouter} from "react-router-dom";

class Pot extends React.Component {

    render(){
        return(
            <div className="container"> 
                <div className="row">
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
            </div>
        )
    }
}

export default Pot;