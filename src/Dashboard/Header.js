import React from "react";
import Logo from "./HeaderComponent/Logo";
import SearchBar from "./HeaderComponent/SearchBar";
import Profile from "./HeaderComponent/Profile";
import Cart from "./HeaderComponent/Cart";


class Header extends React.Component {
    render() {
        return(
            <div className="header flex-horizontal">
                <Logo/>
                <SearchBar/>
                <Profile/>
                <Cart/>  
            </div>
        )
    }
}

export default Header;