import React from "react";
import { Route } from "react-router-dom";
import Home from "./Component/Home";
import WishList from "./Component/Wishlist";
import ShoppingCart from "./Component/ShoppingCart";
import ContactUs from "./Component/ContactUs";

class MainComponent extends React.Component {

    render() {
        return (
            <div className="container-fluid border g-0"> 
                <Route path="/" exact component={Home} /> 
                <Route path="/wishlist" component={WishList} />
                <Route path="/shop" component={ShoppingCart} />
                <Route path="/contact" component={ContactUs} />
            </div>
        )
    }
}

export default MainComponent;