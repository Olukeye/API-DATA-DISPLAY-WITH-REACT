import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'



 class MyNavbar extends Component {
    render() {
        return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='#'></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem Link to='#'>
                            Home
                        </NavItem>
                        <NavItem Link to='#'>
                            Home
                        </NavItem>
                        <NavItem Link to='#'>
                            Home
                        </NavItem>
                    </Nav>
                </Navbar>
        )
    }
}

export default MyNavbar;