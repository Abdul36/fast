import React from "react";

import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

import Header from "./AppHeader";

import hlogo from "../Assets/Images/hlogo.png";
import certificate from "../Assets/Images/certificate.png";
import charter from "../Assets/Images/charter.png";
function Get() {
  return (
    <div>
      <Header />
      <section>
        <Container fluid>
          <Row style={{ position: "relative" }}>
            <Col className="herof bg-white ">
              <h4
                className="heroh heroh1 text-primary"
                style={{ marginLeft: "46px" }}
              >
                Find Your <br></br> Right Job With Us
              </h4>
              <p className="text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br> Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
              <div
                className="tbtns d-flex align-items-center"
                style={{ marginLeft: "47px" }}
              >
                {" "}
                {/* Ensure buttons stay on the same line */}
                <button
                  className="homeb bg-primary text-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Find Job Now
                </button>
                <button
                  className="homeb bg-white text-primary ms-4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Learn More
                </button>
              </div>
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
      {/* Cards */}
      <section>
        <Container className="quality" style={{ position: "relative" }}>
          <div
            className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start gap-3 quality1"
            style={{ position: "relative", top: "-50px" }}
          >
            <div
              className="card1 shadow"
              style={{
                width: "25%",
                padding: "20px",
                // position: "relative",
                // Top: "-118px",
              }}
            >
              <Image
                src={certificate}
                fluid
                className="mx-auto d-block pt-4 pb-3"
              />
              <div className="card-body">
                <h5 className="card-title text-center text-primary pb-2">
                  Expert Agent
                </h5>
                <p className="card-text text-center pb-4">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div
              className="card1 bg-primary shadow"
              style={{ width: "25%", padding: "20px" }}
            >
              <Image
                src={charter}
                fluid
                className="mx-auto d-block pt-4 pb-3"
              />
              <div className="card-body">
                <h5 className="card-title text-center text-white pb-2">
                  Quality Standard
                </h5>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div
              className="card1 shadow"
              style={{ width: "25%", padding: "20px" }}
            >
              <Image
                src={certificate}
                fluid
                className="mx-auto d-block pt-3 pb-3"
              />
              <div className="card-body">
                <h5 className="card-title text-center text-primary pb-2">
                  Certified Method
                </h5>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Get;
