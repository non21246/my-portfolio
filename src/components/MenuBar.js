import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <>
        <Navbar className='bg-light shadow-sm mb-3' sticky='top' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src='./logo192.png' alt='' className='App-logo img-fluid' />
                    {' '} 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-menubar'/>
                <Navbar.Collapse id='basic-menubar'>
                    <Nav className='ms-auto'>
                        <ul className='navbar-nav mr-auto'>
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
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}
