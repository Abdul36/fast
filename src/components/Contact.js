import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

// Images Imports
import Header from "./AppHeader";
import art from "../Assets/Images/art.png";
import location from "../Assets/Images/location.png";
import website from "../Assets/Images/website.png";
import phone from "../Assets/Images/phone.png";
import mail from "../Assets/Images/mail.png";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
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
            <Col xs={12} sm={7} className="mt-3 mt-sm-0">
              <h2 className="text-center" style={{ color: "#0d6efd" }}>
                <b>Contact</b>{" "}
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
              sm={5}
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
                src={art}
                fluid
                className="mx-auto d-block"
                style={{ position: "relative", left: "-80px", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Get In Touch */}
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
            <Col lg={6} className="pt-5">
              <Form>
                <span className="d-flex">
                  <span>
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
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
                        type="email"
                        className="last"
                        placeholder="Last Name"
                      />
                    </Form.Group>
                  </span>
                </span>{" "}
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
                <Button
                  variant="primary"
                  className="pt-2"
                  style={{ color: "white", padding: "8px 20px" }}
                >
                  <b>Submit</b>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-4">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3453899181336!2d-97.94887022516143!3d34.54480939156298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad5cc88e345e05%3A0x2da7e797e1b8730c!2sHines%20Softball%20Park!5e0!3m2!1sen!2s!4v1715760383901!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
