import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";

import Header from "./AppHeader";
import board from "../Assets/Images/board.png";
import checkall from "../Assets/Images/checkall.png";
import neww from "../Assets/Images/neww.png";
import mask1 from "../Assets/Images/mask1.png";
import mask2 from "../Assets/Images/mask2.png";
import Progress from "./Progress";
import mask3 from "../Assets/Images/mask3.png";
import Team from "./Team";
import location from "../Assets/Images/location.png";
import website from "../Assets/Images/website.png";
import mail from "../Assets/Images/mail.png";
import phone from "../Assets/Images/phone.png";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import training from "../Assets/Images/training.png";
import graduation from "../Assets/Images/graduation.png";
import counseling from "../Assets/Images/counseling.png";
import inter from "../Assets/Images/inter.png";

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
      {/* About Us with Images */}
      <section>
        <Container>
          <Row className="flex-column-reverse flex-md-row">
            <Col md className="order-2">
              <h4 style={{ color: "#2B72EE" }}>About Us</h4>
              <h2>
                Local Excellence and <br></br> Global Reach
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consequat tempor turpis, quis egestas ligula
                efficitur et. Donec at diam at nisl consectetur.
              </p>
              <span className="d-flex">
                <span style={{ width: "10%", marginTop: "10px" }}>
                  <Image
                    src={checkall}
                    fluid
                    className="mx-auto d-block"
                    style={{ width: "50%" }}
                  />
                </span>
                <span style={{ width: "90%" }}>
                  <h4>Thousand of jobs available</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat tempor turpis, quis egestas ligula
                    efficitur et.
                  </p>
                </span>
              </span>
              <span className="d-flex">
                <span style={{ width: "10%", marginTop: "10px" }}>
                  <Image
                    src={checkall}
                    fluid
                    className="mx-auto d-block"
                    style={{ width: "50%" }}
                  />
                </span>
                <span style={{ width: "90%" }}>
                  <h4>Thousand of jobs available</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat tempor turpis, quis egestas ligula
                    efficitur et.
                  </p>
                </span>
              </span>
              <Button className="bg-primary text-white pt-2">
                <b>Discover More</b>
              </Button>
            </Col>
            <Col md className="order-1 pt-5">
              <span className="d-flex">
                <span style={{ width: "50%" }}>
                  <Image
                    src={neww}
                    fluid
                    className="mx-auto d-block"
                    style={{ width: "100%" }}
                  />
                </span>
                <span style={{ width: "50%" }}>
                  <Image
                    src={mask1}
                    fluid
                    className="mx-auto d-block"
                    style={{ width: "70%" }}
                  />
                  <Image
                    src={mask2}
                    fluid
                    className="mx-auto d-block"
                    style={{ width: "80%", height: "40vh" }}
                  />
                </span>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* What we serve */}
      <section>
        <Container>
          <Row>
            <Col md className=" ps-5">
              <h4 className="text-primary  pt-5 pb-2">
                What <br></br> We Serve
              </h4>
              <h2 className="pb-2">
                We help You To Find <br></br> The Right Choice
              </h2>
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
            <Col style={{ position: "relative" }}>
              <div className="d-flex flex-column flex-md-row ">
                <Card style={{ width: "18rem" }} className="md cards">
                  <Card.Img
                    variant="top"
                    src={training}
                    style={{ width: "20%", marginLeft: "100px" }}
                    className="pt-2"
                  />
                  <Card.Body>
                    <Card.Title className="text-center pt-">
                      Develop & Training
                    </Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet <br></br> consectetuer
                      adipiscing elit. <br></br> Aenean commodo ligula eget
                      dolor.
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
                    className="pt-3"
                  />
                  <Card.Body className="text-white" e>
                    <Card.Title className="text-center ">
                      Job Placement
                    </Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet <br></br> consectetuer
                      adipiscing elit. <br></br>
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
                    className="pt-3"
                  />
                  <Card.Body className="text-white">
                    <Card.Title className="text-center">
                      Jobs Conselling
                    </Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet <br></br> consectetuer
                      adipiscing elit. <br></br>
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
                    className="pt-3"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Test & Interview
                    </Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet <br></br> consectetuer
                      adipiscing elit. <br></br>
                      Aenean commodo ligula eget dolor.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* Why Choose Us */}
      <section>
        <Container>
          <Row>
            <Col md className="text1" style={{ position: "relative" }}>
              <Image
                src={mask3}
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
                  right: "20px",
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              ></div>
            </Col>
            <Col>
              <h4 style={{ color: "#2B72EE" }}>Why Choose Us</h4>
              <h2>
                Recruitment and <br></br> Staffing Redefined
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse <br></br> consequat tempor turpis, quis egestas
                ligula efficitur et. Donec at <br></br> diam at nisl
                consectetur.
              </p>
              <Progress />
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      {/* Team */}
      <section>
        <Team />
      </section>
      <br></br>
      <br></br>
      <section>
        <Container className="mt-5">
          <Row>
            {/* Left column for contact information */}
            <Col lg={6}>
              <h4 style={{ color: "#0d6efd" }}>Get In Touch</h4>
              <br />
              <h2>
                Dont Hesitate <br />
                To Ask a Question
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <span className="d-flex ">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <Image src={location} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Address </b>
                  </p>
                  <br />
                </span>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "200px",
                  }}
                >
                  <Image src={website} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Website </b>
                  </p>
                  <br />
                </span>
              </span>
              <Row>
                <Col className="d-flex">
                  <p className="ps-4">457 Morningview Lane, NY</p>
                </Col>
                <Col className="d-flex">
                  <p className="ps-4">calfinity.com</p>
                </Col>
              </Row>
              <span className="d-flex ">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <Image src={mail} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Email</b>
                  </p>
                  <br />
                </span>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "225px",
                  }}
                >
                  <Image src={phone} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Contact</b>
                  </p>
                  <br />
                </span>
              </span>
              <Row>
                <Col className="d-flex">
                  <p className="ps-4">Calfinity.gmail.com</p>
                </Col>
                <Col className="d-flex">
                  <p className="ps-4">+1 (234) 567 890</p>
                </Col>
              </Row>
            </Col>
            {/* Right column for form */}
            <Col
              lg={6}
              className="pt-5 bg-primary"
              style={{
                borderTopRightRadius: "65px",
                borderBottomLeftRadius: "65px",
              }}
            >
              <Form>
                <p style={{ color: "white" }}>Name</p>
                <span className="d-flex">
                  <span>
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        className="first"
                        placeholder="First Name"
                      />
                    </Form.Group>
                  </span>
                  <span>
                    <Form.Group
                      className="mb-3 ms-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        className="last"
                        placeholder="Last Name"
                      />
                    </Form.Group>
                  </span>
                  <br></br>
                </span>{" "}
                <p style={{ color: "white" }}>Email</p>
                <Form.Group className="mb-3  d-flex" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    className="full"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    rows={6}
                    className="areat"
                  />
                </Form.Group>
                <button
                  style={{
                    marginLeft: "40%",
                    backgroundColor: "white",
                    color: "#2B72EE ",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  <a>
                    <b>Send Message</b>
                  </a>
                </button>
                {/* <p>Abdul</p> */}
                <br></br>
                <br></br>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <Subscribe />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
