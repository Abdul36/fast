import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "./AppHeader";
import board from "../Assets/Images/board.png";

function HeroT() {
  return (
    <div>
      <Header />
      <section>
        <Container fluid>
          <Row style={{ position: "relative" }}>
            <Col className="herof bg-white ">
              <h4 className="heroh">About Us</h4>
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
              <Image src={board} fluid className="heroimg mx-auto d-block" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HeroT;
