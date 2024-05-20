import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Carousel,
} from "react-bootstrap";

import Header from "./AppHeader";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import Lists from "./Counter";
import News from "./News";

import hlogo from "../Assets/Images/hlogo.png";
import paper from "../Assets/Images/paper.png";
import charter from "../Assets/Images/charter.png";
import certificate from "../Assets/Images/certificate.png";
import business from "../Assets/Images/business.png";
import man from "../Assets/Images/man.png";
import female from "../Assets/Images/female.png";
import round from "../Assets/Images/round.png";
import training from "../Assets/Images/training.png";
import graduation from "../Assets/Images/graduation.png";
import counseling from "../Assets/Images/counseling.png";
import inter from "../Assets/Images/inter.png";

export default function Homee() {
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
                width: "25%",
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
      {/* Welcome To Calfinity */}
      <section>
        <Container>
          <Row>
            <Col md className="text-center">
              <Image
                src={business}
                fluid
                className="mx-auto d-block pt-4 pb-3"
                style={{
                  borderTopRightRadius: "80px",
                  borderBottomLeftRadius: "80px",
                }}
              />
            </Col>
            <Col md className="text1">
              <h4 className="text-primary pt-4 pb-2">Welcome To Calfinity</h4>
              <h2 className="pb-2">
                We Help Your <br></br> Career To Grow
              </h2>
              <p className="text-justify pb-2">
                Curabitur pharetra luctus vulputate. Proin finibus odio vel
                ipsum scelerisque, luctus bibendum purus pellentesque. Integer
                porta dolor at consequat maximus. Cras orci nisi, malesuada sed
                nisl quis, tempus tempus eros. Quisque eu diam a mi vulputate
                lacinia. Aliquam eros neque, luctus ut ligula in, faucibus
                fermentum sem. Vestibulum tempor sollicitudin fringilla.
              </p>
              <button
                className="bg-primary text-white"
                style={{
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                Learn More
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <br></br>
      <br></br>
      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#F8FBFF" }}>
        <Container>
          <Row>
            <Col md className="text1">
              <h4 className="text-primary pt-4 pb-2">Why Choose Us</h4>
              <h2 className="pb-2">
                Results <br></br> Guaranteed!
              </h2>
              <p className="text-justify pb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <button
                className="bg-primary text-white"
                style={{
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                READ MORE
              </button>
            </Col>
            <Col md className="text-center">
              <Image
                src={man}
                fluid
                className="mx-auto d-block pt-4 pb-3"
                style={{
                  borderTopRightRadius: "80px",
                  borderBottomLeftRadius: "80px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* What we serve */}
      <section>
        <Container>
          <Row className="flex-row-reverse">
            <Col className="order-2" style={{ position: "relative" }}>
              <div className="d-flex flex-column flex-md-row ">
                <Card style={{ width: "18rem" }} className="md cards">
                  <Card.Img
                    variant="top"
                    src={training}
                    style={{ width: "20%", marginLeft: "100px" }}
                    className="pt-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Develop & Training
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem", position: "relative", top: "-15px" }}
                  className="md cards bg-primary"
                >
                  <Card.Img
                    variant="top"
                    src={graduation}
                    style={{ width: "20%", marginLeft: "100px" }}
                    className="pt-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-center text-white">
                      Job Placement
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div
                className="d-flex flex-column flex-md-row "
                style={{ position: "relative" }}
              >
                <Card
                  style={{ width: "18rem" }}
                  className="md cards bg-primary"
                >
                  <Card.Img
                    variant="top"
                    src={counseling}
                    style={{ width: "20%", marginLeft: "100px" }}
                    className="pt-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-center text-white">
                      Jobs Conselling
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem", position: "relative", top: "-15px" }}
                  className="md cards"
                >
                  <Card.Img
                    variant="top"
                    src={inter}
                    style={{ width: "20%", marginLeft: "100px" }}
                    className="pt-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Test & Interview
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md className=" order-1 ps-5">
              <h4 className="text-primary  pt-5 pb-2">
                What <br></br> We Serve
              </h4>
              <h2 className="pb-2 ">We help You To Find The Right Choice</h2>
              <p className="text-justify pb-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button
                className="bg-primary text-white"
                style={{
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                Find Your Job
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* How we Work  */}
      <section style={{ backgroundColor: "#F8FBFF" }}>
        <Container>
          <Row>
            <Col md className="text1">
              <h4 className="text-primary pt-4 pb-2">How we Work</h4>
              <h2 className="pb-2">
                Learn How to <br></br> Achieve Your Goal
              </h2>
              <p className="text-justify pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consequat tempor turpis, quis egestas ligula
                efficitur et. Donec at diam at nisl consectetur.
              </p>
              <div className="row">
                <div className="col-sm-1">
                  <h2
                    className="bg-primary ps-2 pt-2 text-white"
                    style={{
                      height: "45px",
                      width: "50px",
                      borderTopLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    01
                  </h2>
                </div>
                <div className="col-sm-11 ">
                  <h4 className="ps-3">Apply for the Jobs</h4>
                  <p className="ps-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat tempor turpis, quis egestas ligula
                    efficitur et.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1">
                  <h2
                    className="bg-primary ps-2 pt-2 text-white"
                    style={{
                      height: "45px",
                      width: "50px",
                      borderTopLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    02
                  </h2>
                </div>
                <div className="col-sm-11">
                  <h4 className="ps-3">Prepare for the Text & Interview</h4>
                  <p className="ps-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat tempor turpis, quis egestas ligula
                    efficitur et.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1">
                  <h2
                    className="bg-primary ps-2 pt-2 text-white"
                    style={{
                      height: "45px",
                      width: "50px",
                      borderTopLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    03
                  </h2>
                </div>
                <div className="col-sm-11">
                  <h4 className="ps-3">Get Your Dream Job</h4>
                  <p className="ps-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat tempor turpis, quis egestas ligula
                    efficitur et.
                  </p>
                </div>
              </div>
            </Col>
            <Col md className="text1" style={{ position: "relative" }}>
              <Image
                src={female}
                fluid
                className="mx-auto d-block pt-4 pb-3"
                style={{
                  borderTopRightRadius: "80px",
                  borderBottomLeftRadius: "80px",
                }}
              />
              <div
                className="bg-primary"
                style={{
                  width: "111px",
                  height: "90px",
                  position: "absolute",
                  top: "73%",
                  left: "8px",
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <h4 className="text-center text-white pt-2">
                  <b>15+</b>
                </h4>
                <p className="text-center text-white">Experience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* Counter */}
      <section>
        <Lists />
      </section>
      <br></br>
      <br></br>
      {/* Testimonials */}
      <section>
        <Container className="double" style={{ position: "relative" }}>
          <Row>
            <Col xs={12} md={6}>
              <h5 className="pt-4" style={{ color: "#2B72EE" }}>
                Testimonial
              </h5>
              <h2>
                What They Say <br /> About Us
              </h2>
              <p>
                Uniquely promote adaptive quality vectors rather than
                stand-alone e-markets. Pontificate alternative architectures
                whereas iterate.
              </p>
            </Col>
            {/* Cards */}
            <Col xs={12} md={6}>
              <Carousel id="testimonialCarousel">
                {/* Carousel Item 1 */}
                <Carousel.Item>
                  <div
                    className="shadow mt-4 ms-4"
                    style={{
                      width: "100%",
                      borderTopRightRadius: "32px",
                      borderBottomLeftRadius: "32px",
                      padding: "30px",
                      paddingBottom: "40px",
                      backgroundColor: "white",
                    }}
                  >
                    <h4 className="text-center">"Second testimonial"</h4>
                    <p className="text-center">
                      " Sed dignissim faucibus venenatis. Proin eu odio magna.
                      Nunc eget ex rhoncus, commodo sem sed, placerat est. Donec
                      id eleifend lectus "
                    </p>
                  </div>
                </Carousel.Item>

                {/* Carousel Item 2 */}
                <Carousel.Item>
                  <div
                    className="shadow mt-4 ms-4"
                    style={{
                      width: "100%",
                      borderTopRightRadius: "32px",
                      borderBottomLeftRadius: "32px",
                      padding: "30px",
                      paddingBottom: "40px",
                      backgroundColor: "white",
                    }}
                  >
                    <h4 className="text-center">"Second testimonial"</h4>
                    <p className="text-center">
                      " Sed dignissim faucibus venenatis. Proin eu odio magna.
                      Nunc eget ex rhoncus, commodo sem sed, placerat est. Donec
                      id eleifend lectus "
                    </p>
                  </div>
                </Carousel.Item>

                {/* Carousel Item 3 */}
                <Carousel.Item>
                  <div
                    className="shadow mt-4 ms-4"
                    style={{
                      width: "100%",
                      borderTopRightRadius: "32px",
                      borderBottomLeftRadius: "32px",
                      padding: "30px",
                      paddingBottom: "40px",
                      backgroundColor: "white",
                    }}
                  >
                    <h4 className="text-center">"Second testimonial"</h4>
                    <p className="text-center">
                      " Sed dignissim faucibus venenatis. Proin eu odio magna.
                      Nunc eget ex rhoncus, commodo sem sed, placerat est. Donec
                      id eleifend lectus "
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>

              <br></br>

              <Image
                src={round}
                fluid
                className="mx-auto d-block carousecard "
                style={{
                  position: "relative",
                  bottom: "70px",
                  paddingLeft: "30px",
                }}
              />
              <h5
                style={{
                  position: "relative",
                  bottom: "70px",
                  paddingLeft: "30px",
                }}
                className="text-center text-primary"
              >
                Leslie Alexander
              </h5>

              <h6
                style={{
                  position: "relative",
                  bottom: "70px",
                  paddingLeft: "30px",
                }}
                className="text-center"
              >
                Director
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <News />
      <br></br>
      <br></br>
      <Subscribe />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
