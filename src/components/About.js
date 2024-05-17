import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

import Header from "./AppHeader";
import board from "../Assets/Images/board.png";
export default function About() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section>
        <Container
          fluid
          style={{ margin: "0px", minHeight: "auto" }}
          className="pos"
        >
          <Row className="align-items-center">
            {/* Left column for text */}
            <Col xs={12} sm={6} className="mt-3 mt-sm-0">
              <h2 className="text-center" style={{ color: "#0d6efd" }}>
                <b>About Us</b>{" "}
              </h2>
              <p
                className="text-justify"
                style={{ paddingLeft: "150px", paddingRight: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
                <br></br>
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <br></br>
              <br></br>
              <br></br>
            </Col>
            {/* Right column for image */}
            <Col
              xs={12}
              sm={6}
              className="text-center text-sm-start"
              style={{
                backgroundColor: "#0d6efd",
                position: "relative",
                top: "-70px",
                paddingRight: "0",
                paddingLeft: "0",
              }}
            >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Image
                src={board}
                fluid
                className="mx-auto d-block"
                style={{ position: "relative", width: "70%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
