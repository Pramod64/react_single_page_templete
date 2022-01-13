import React, { Component } from 'react'
import logo from './Assets/image/logo.png'
import {Navbar,Container,Offcanvas,Nav} from 'react-bootstrap'
import './Assets/css/Style.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="white" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#"><img className='header-logo' src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header className='btn-offcanvas' closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link className='nav-items' href="#action1">Page 1</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">Copy of page 3</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">page 2</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">page 3</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">page 4</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">page 5</Nav.Link>
                        <Nav.Link className='nav-items' href="#action2">page 6</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
      </>
    )
  }
}
