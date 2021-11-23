import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

function Layout(props) {
    return (
        <div id="wrapper">
            <Sidebar />
            <Topbar />

            <main className="dashboard-view">
                {props.children}
            </main>

            <Footer />
        </div>
    );
}

export default Layout;