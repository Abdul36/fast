import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
export default function Hesitate() {
  return;
  <section>
    <Container fluid style={{ margin: "0px" }}>
      <Row className="align-items-center">
        <Col xs={12} sm={6} className="mt-3 mt-sm-0">
          <h2 className="text-center" style={{ color: "blue" }}>
            Get In Touch
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="text-center text-sm-start"
          style={{ backgroundColor: "#0d6efd" }}
        >
          <Image src={get} fluid className="mx-auto d-block" />
        </Col>
      </Row>
    </Container>
  </section>;
}
