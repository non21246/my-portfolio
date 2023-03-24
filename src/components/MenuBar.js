import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class MenuBar extends Component {
    render() {
    return (
        <Navbar className='bg-red shadow-sm mb-3' sticky='top' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src='/img/nyancat.gif' width='100' height='50' alt='..' className='App-logo image-fluid'/>
                    {' '} My portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-menubar'/>
                <Navbar.Collapse id='basic-menubar'>
                    <Nav className='ms-auto'>
                        <ul className='navbar-nav mr-auto '>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/about' className='nav-link'>About</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/experience' className='nav-link'>Experience</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/admin' className='nav-link'>Admin</NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  }
}
