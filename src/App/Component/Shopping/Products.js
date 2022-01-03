import React from "react";
import {connect} from "react-redux";
import { addToWishlist} from "../.../../../../ActionsCreator/Actions"

class Products extends React.Component {
    render() {
        const allItems = this.props.items && this.props.items.map((item) => {
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
                            <button className="btn btn-primary" onClick={() => this.props.addToWishlist(item.id)}>
                                "Add to wishlist"
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
                    {allItems.length ? allItems : "No Products Found"}
                </div>
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
