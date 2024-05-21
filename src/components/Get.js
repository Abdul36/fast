import React from "react";

import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

import Header from "./AppHeader";
import Cal from "./Cal";
import Footer from "./Footer";

import hlogo from "../Assets/Images/hlogo.png";
function Get() {
  return (
    <div>
      <Header />
      <section>
        <Container fluid>
          <Row style={{ position: "relative" }}>
            <Col className="herof " style={{ backgroundColor: "#f8fbff" }}>
              <h4 className="heroh">Get In Touch</h4>
              <p className="text-justify ps-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>
            {/* Image Section */}
            <Col
              className="heros bg-primary"
              style={{ marginTop: "-5px" }}
              // style={{ position: "relative", top: "-70px" }}
            >
              <br></br>
              <Image
                src={hlogo}
                fluid
                className="heroimg himg mx-auto d-block"
                style={{ position: "relative", right: "95px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Calendly */}
      <Cal />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default Get;
