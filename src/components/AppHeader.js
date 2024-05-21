import React from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/logo.png";
import menu from "../Assets/Images/menu.png";

export default function Header() {
  return (
    <section>
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={6}
            lg={6}
            className="text-center text-sm-start"
            style={{ backgroundColor: "#F8FBFF" }}
          >
            <Image src={logo} fluid className="mx-auto d-block" />
          </Col>
          <Col
            xs={6}
            lg={6}
            className="mt-3 mt-sm-0 NavItems"
            style={{
              backgroundColor: "#FFFFFF", // Set background color to white for medium, small, and extra-small screens
              backgroundColor: "#0d6efd", // Set background color to blue for large, extra-large, and double extra-large screens
            }}
          >
            <Navbar
              variant="dark"
              expand="md"
              style={{
                position: "relative",
                zIndex: "100",
                backgroundColor: "inherit", // Remove background color from Navbar to inherit the parent's background color
              }}
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ml-5"
                style={{ marginLeft: "150px" }}
              >
                <Image src={menu} fluid className="mx-auto d-block" />
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column flex-md-row">
                  <Link className="navLinks ps-4 text-white" to="/">
                    Home
                  </Link>
                  <hr
                    className="d-md-none my-1 mx-4"
                    style={{ borderColor: "#5F5F5F" }}
                  />{" "}
                  <Link className="navLinks ps-4 text-white" to="/About">
                    About
                  </Link>
                  <hr
                    className="d-md-none my-1 mx-4"
                    style={{ borderColor: "#5F5F5F" }}
                  />{" "}
                  <Link className="navLinks ps-4 text-white" to="/JobList">
                    Job List
                  </Link>
                  <hr
                    className="d-md-none my-1 mx-4"
                    style={{ borderColor: "#5F5F5F" }}
                  />{" "}
                  <Link className="navLinks ps-4 text-white" to="/Contact">
                    Contact
                  </Link>
                  <hr
                    className="d-md-none my-1 mx-4"
                    style={{ borderColor: "#5F5F5F" }}
                  />{" "}
                  <Link className="navLinks ps-4 text-white" to="/Get">
                    <button className="btg">Get In Touch</button>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
