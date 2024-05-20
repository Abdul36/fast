import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Form as BootstrapForm,
} from "react-bootstrap";
import location from "./Assets/Images/location.png";
import website from "./Assets/Images/website.png";
import mail from "./Assets/Images/mail.png";
import phone from "./Assets/Images/phone.png";

export default function Test() {
  return (
    <div>
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
              <Row>
                <Col
                  xs={1}
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Image src={location} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Address </b>
                  </p>
                  <br />
                </Col>

                <Col
                  xs={1}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "250px",
                  }}
                >
                  <Image src={website} fluid className="mx-auto d-block" />
                  <p style={{ marginLeft: "10px", marginTop: "12px" }}>
                    <b>Website </b>
                  </p>
                  <br />
                </Col>
              </Row>
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
    </div>
  );
}
