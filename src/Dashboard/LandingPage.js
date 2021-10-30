import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class LandingPage extends React.Component{

    render() {
        return(
            <div class="main-wrapper">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;