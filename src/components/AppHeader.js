import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import { HiMenu } from "react-icons/hi"; // Import the desired icon from react-icons

import logo from "../Assets/Images/logo.png";
import graduation from "../Assets/Images/graduation.png";

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
          <Col xs={6} lg={6} className="mt-3 mt-sm-0 NavItems bg-primary">
            <Navbar
              variant="dark"
              expand="md"
              style={{
                position: "relative",
                zIndex: "100",
              }}
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ml-5"
                style={{ marginLeft: "150px" }}
              >
                {" "}
                <Image src={graduation} fluid className="mx-auto d-block" />
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column flex-sm-row">
                  <Link className="navLinks ps-4" to="/">
                    Home
                  </Link>
                  <Link className="navLinks ps-4" to="/About">
                    About
                  </Link>
                  <Link className="navLinks ps-4" to="/JobList">
                    Job List
                  </Link>
                  <Link className="navLinks ps-4" to="/Contact">
                    Contact
                  </Link>
                  <Link className="navLinks ps-4" to="/Cal">
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
