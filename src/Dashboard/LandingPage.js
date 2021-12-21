import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class LandingPage extends React.Component{

    render() {
        return(
            <div className="main-wrapper">
                <Header 
                enabledLoggedIn={this.props.enabledLoggedIn} />
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;