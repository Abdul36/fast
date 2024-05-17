import { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import image1 from "../Assets/Images/image1.png";
import clock from "../Assets/Images/clock.png";
import Vector from "../Assets/Images/Vector.png";

export default function Available() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <div style={{ padding: "20px" }}>
        <Container>
          <p
            className="text-center"
            style={{ color: "#2B72EE", marginBottom: "20px" }}
          >
            Jobs are Available
          </p>
          <h4 className="text-center">Job Recommendations You Might Need</h4>
          <p className="text-center">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nunc sollicitudin, odio nec cursus lobortis,
            nunc ipsum suscipit ante, nec tristique tortor felis ac urna.
            Vivamus laoreet lacus commodo magna tempus, vitae luctus neque
            sagittis.
          </p>
          <br />
          <Row className="d-flex">
            {[1, 2, 3].map((index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                style={{ marginBottom: "20px" }}
              >
                <div className="card">
                  <div className="card-body">
                    <Image src={image1} fluid className="mx-auto d-block" />
                    <h5 className="card-title text-center pt-4">
                      <b>Layout Designer</b>
                    </h5>
                    <h5
                      className="card-title text-center"
                      style={{ color: "#2B72EE" }}
                    >
                      Rometheme Studio
                    </h5>
                    <p className="text-center">Pekanbaru, Indonesia</p>
                    <p className="card-text ms-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center ps-5">
                        <Image
                          src={clock}
                          fluid
                          className="mx-auto d-block "
                          style={{ marginRight: "10px" }}
                        />
                        <p
                          className="m-0 ps-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          2 Days ago
                        </p>
                      </div>
                      <button
                        className="apply bg-primary ms-5 pt-2"
                        style={{
                          padding: "7px 15px",
                          border: "none",
                          borderRadius: "10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            {showMore &&
              [7, 8, 9].map((index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ marginBottom: "20px" }}
                >
                  <div className="card">
                    <div className="card-body">
                      <Image src={image1} fluid className="mx-auto d-block" />
                      <h5 className="card-title text-center pt-4">
                        <b>Layout Designer</b>
                      </h5>
                      <h5
                        className="card-title text-center"
                        style={{ color: "#2B72EE" }}
                      >
                        Rometheme Studio
                      </h5>
                      <p className="text-center">Pekanbaru, Indonesia</p>
                      <p className="card-text ms-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center ps-5">
                          <Image
                            src={clock}
                            fluid
                            className="mx-auto d-block "
                            style={{ marginRight: "10px" }}
                          />
                          <p className="m-0 ps-2">2 Days ago</p>
                        </div>
                        <button
                          className="apply bg-primary ms-5 pt-2"
                          style={{
                            padding: "7px 15px",
                            border: "none",
                            borderRadius: "10px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            {showMore &&
              [4, 5, 6].map((index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ marginBottom: "20px" }}
                >
                  <div className="card">
                    <div className="card-body">
                      <Image src={image1} fluid className="mx-auto d-block" />
                      <h5 className="card-title text-center pt-4">
                        <b>Layout Designer</b>
                      </h5>
                      <h5
                        className="card-title text-center"
                        style={{ color: "#2B72EE" }}
                      >
                        Rometheme Studio
                      </h5>
                      <p className="text-center">Pekanbaru, Indonesia</p>
                      <p className="card-text ms-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center ps-5">
                          <Image
                            src={clock}
                            fluid
                            className="mx-auto d-block "
                            style={{ marginRight: "10px" }}
                          />
                          <p className="m-0 ps-2">2 Days ago</p>
                        </div>
                        <button
                          className="apply bg-primary ms-5 pt-2"
                          style={{
                            padding: "7px 15px",
                            border: "none",
                            borderRadius: "10px",
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
          {/* Show more button */}
          <Row className="justify-content-center mt-3">
            <Col xs="auto">
              <Image
                onClick={handleShowMore}
                src={Vector}
                fluid
                className="mx-auto d-block"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
