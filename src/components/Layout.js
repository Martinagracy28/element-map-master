import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout(props) {
    return (
        <div id="wrapper">
            <Sidebar />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;