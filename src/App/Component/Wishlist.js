import React from "react";
import {connect} from "react-redux";
import {removeFromWishList} from "../../ActionsCreator/Actions"

class WishList extends React.Component {
    render() {
        const whishlistItems = this.props.wishlistBag.map((item) => {
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
                <button className="button primary" onClick={() => this.props.removeFromWishList(item.id)}>
                    Remove from wishlist
                </button>
            </div>
        })
        return (
            <div className="container flex-wrap">
                {whishlistItems.length? whishlistItems: "your wishlist is empty"}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        wishlistBag: state.wishlistBag,
    }
}

export default connect(mapStateToProps, {
    removeFromWishList
})(WishList);
