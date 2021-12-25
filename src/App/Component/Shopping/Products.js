import React from "react";
import {connect} from "react-redux";
import { addToWishlist} from "../.../../../../ActionsCreator/Actions"

class Products extends React.Component {
    render() {
        const allItems = this.props.items.map((item) => {
            return  <div className="products" key={item.id}>
            <div className="">
                 <img className="images" src="/logo512.png" alt="add the product image" />
            </div>
            <div className="flex-container">
                 <div className="info">
                     {item.name}
                 </div>
                 <div className="wishlist-logo">
                     <img src="" alt="like logo"/>
                     {item.info}
                 </div>
                </div>
                <button className="button" onClick={() => this.props.addToWishlist(item.id)}>
                    "Add to wishlist"
                </button>
            </div>
        })

        return (
            <div className="container flex-wrap">
                {allItems}
            </div>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        items: store.allItems || [],
    }
}

export default connect(mapStateToProps, {
    addToWishlist
})(Products);
