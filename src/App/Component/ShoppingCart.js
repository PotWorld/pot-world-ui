import React from "react";
import Filters from "./Shopping/Filters";
import Products from "./Shopping/Products";

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="container-fluid border p-0">
               <div className="row g-0">
                   <div className="col">
                        <Filters />
                   </div>
               </div>
               <div className="row g-0">
                   <Products/>
               </div>
            </div>  
        )
    }

}

export default ShoppingCart;
