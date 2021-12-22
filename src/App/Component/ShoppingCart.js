import React from "react";
import Filters from "./Shopping/Filters";
import Products from "./Shopping/Products";

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="shop-cart">
               <div className="row">
                   <Filters />
                   <Products/>
               </div>
            </div>
        )
    }

}

export default ShoppingCart;
