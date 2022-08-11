import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <>
            <Navbar className="justify-content-center" bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="/about" style={{fontSize:"13px"}}>About</Navbar.Brand>
                    <Navbar.Brand href="/about" style={{fontSize:"13px"}}>Terms & Services</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}