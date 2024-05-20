import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "./AppHeader";
import hlogo from "../Assets/Images/hlogo.png";
import certificate from "../Assets/Images/certificate.png";
import charter from "../Assets/Images/charter.png";

export default function Mcards() {
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
          <Row
            className="align-items-center"
            style={{ backgroundColor: "#F8FBFF" }}
          >
            {/* Left column for text */}
            <Col
              xs={12}
              sm={7}
              className="mt-3 mt-sm-0"
              style={{ backgroundColor: "#F8FBFF" }}
            >
              <h2
                className="text-justify"
                style={{ paddingLeft: "150px", color: "#0d6efd" }}
              >
                Find Your <br /> Right Job With Us
              </h2>
              <p
                className="text-justify"
                style={{ paddingLeft: "150px", paddingRight: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
                <br />
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <br />
              <br />
              <br />
              <br />
            </Col>
            {/* Right column for image */}
            <Col
              xs={12}
              sm={5}
              className="text-center text-sm-start"
              style={{
                backgroundColor: "#0d6efd",
                paddingRight: "0",
                paddingLeft: "0",
                height: "80vh",
              }}
            >
              <br />
              <br />
              <br />
              <br />
              <Image
                src={hlogo}
                fluid
                className="mx-auto d-block"
                style={{ position: "relative", top: "20px", width: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Cards */}
      <section>
        <Container style={{ position: "relative" }}>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start gap-3">
            <div
              className="card1 shadow"
              style={{
                width: "30%",
                padding: "20px",
                position: "relative",
                Top: "-40px",
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
              style={{ width: "30%", padding: "20px" }}
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
              style={{ width: "30%", padding: "20px" }}
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
