import React from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap"
import Logo from "./../assets/images/site-logo.png"
import "./../stylesheets/components/landingPageNavbar.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export default class LandingPageNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" expand="lg" className="_navBar">
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form>
              <Nav className="mr-auto">
                <Nav.Link href="#home" className="navabr_link">
                  Home
                </Nav.Link>
                <Nav.Link href="#about-us" className="navabr_link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#testimonials" className="navabr_link">
                  Testimonials
                </Nav.Link>
                <Nav.Link href="#contact-us" className="navabr_link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
