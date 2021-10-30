import React from "react";
import FirstBodySection from "./BodyComponent/FirstBodySection";
import SecondBodySection from "./BodyComponent/SecondBodySection";
import ThirdBodySection from "./BodyComponent/ThirdBodySection";
import FourthBodySection from "./BodyComponent/FourthBodySection";

class Body extends React.Component {
    render() {
        return (
            <div className="centre-20">
                <FirstBodySection/> 
                <SecondBodySection/>
                <ThirdBodySection/>
                <FourthBodySection/> 
            </div> 
        )
    }
}

export default Body;