import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/loans_tracking_logo.png'

export default function NavigationBar() {
    return (
        <>    
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={Logo}
                        width="150"
                        height="50"                        
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/about">About</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}