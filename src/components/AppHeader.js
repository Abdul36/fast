import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../Assets/Images/logo.png";

export default function Header() {
  return (
    <section>
      {/* NavBar */}
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={6}
            className="text-center text-sm-start"
            style={{ backgroundColor: "#F8FBFF" }}
          >
            <Image src={logo} fluid className="mx-auto d-block" />
          </Col>
          <Col xs={12} sm={6} className="mt-3 mt-sm-0">
            <Navbar
              variant="dark"
              expand="md"
              style={{
                background: "transparent",
                position: "relative",
                zIndex: "100",
              }}
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ml-5"
                style={{ marginLeft: "150px" }}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#job">Job List</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <button className="btg">Get In Touch</button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
