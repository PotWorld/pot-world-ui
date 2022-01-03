import React from "react";
import {connect} from "react-redux";
import {removeFromWishList} from "../../ActionsCreator/Actions"

class WishList extends React.Component {
    render() {
        const allItems = this.props.wishlistBag.map((item) => {
            return  (
            <div className="col-md-4 border" key={item.id}>
                <div className="card border">
                    <img className="images card-img-top" src={item.path} alt="add the product image" />
                    <div className="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <div className="">
                            <img src="" alt="like logo"/>
                            {item.info}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row border g-0">
                        <div className="col-md-4 d-flex justify-content-end flex-grow-1">
                            <button className="btn btn-secondary" onClick={() => this.props.removeFromWishList(item.id)}>
                                "Remove to wishlist"
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
            )
        })

        return (
            <div className="container-fluid border g-0">
                <div className="row border g-0 gy-3">
                    {allItems.length? allItems: "Add Item to your wishlist"}
                </div>
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
