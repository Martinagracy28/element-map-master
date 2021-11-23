import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <header className="header">
            <Container className="d-flex align-items-center">
                <span className="ms-auto"></span>
                <a href="/" className="header-logo"><img src={Logo} alt="logo" /></a>
            </Container>
        </header>
    );
}

export default Header;