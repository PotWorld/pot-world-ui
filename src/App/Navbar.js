import React from "react";
import { Link } from "react-router-dom";

const navigationList = [
    {name: "Home", path: "/"},
    {name: "Wishlist", path: "/wishlist"},
    {name: "Shopping", path: "/shop"},
    {name: "ContactUs", path: "/contact"}
];


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reRender: false,
        }
    }

    handleClick() {
        this.setState({reRender: true})
    }

    render() {
        const renderedList = navigationList.map((list, index) => {
            let selected = window.location.pathname === list.path ? "nav-selected" :"";
            return (
                <div key={index} className={`nav-child ${selected}`}>
                    <Link to={list.path} className="nav-link" onClick={() => this.handleClick()}> {list.name}</Link>
                </div>
            )
        });

        return (
            <div className="navlist">
                {renderedList}
            </div>
        )
    }
}

export default Navbar;