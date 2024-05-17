import React, { useState } from "react";
import { Image, Col, Row } from "react-bootstrap";

import paper from "../Assets/Images/paper.png";
import rarrow from "../Assets/Images/rarrow.png";
export default function News() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <div>
        <h4 className="text-primary">News</h4>
        <h2>News and Article</h2>
        <p>
          Uniquely promote adaptive quality vectors rather than stand-alone
          e-markets. Pontificate <br></br> alternative architectures whereas
          iterate.
        </p>
        <br></br>
        <Row>
          <Col>
            <div className="d-flex ">
              <div>
                <Image src={paper} fluid className="mx-auto d-block" />
              </div>
              <div className="ps-4">
                <h6>
                  This How to use an eye <br></br> catching CV, Approved to{" "}
                  <br></br> get jobs!
                </h6>
                <p>June 10,2023</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing
                  elit. Aenean
                </p>
                {showMore && (
                  <p>
                    Lorem ipsum dolor sit amet, <br></br> consectetuer
                    adipiscing elit. Aenean
                  </p>
                )}
                <div onClick={toggleShowMore} style={{ cursor: "pointer" }}>
                  <p className="text-primary">Learn More</p>
                  <Image
                    src={rarrow}
                    fluid
                    className="mx-auto d-block"
                    style={{ marginTop: "-41px>" }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex ">
              <div>
                <Image src={paper} fluid className="mx-auto d-block" />
              </div>
              <div className="ps-4">
                <h6>
                  This How to use an eye <br></br> catching CV, Approved to{" "}
                  <br></br> get jobs!
                </h6>
                <p>June 10,2023</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing
                  elit. Aenean
                </p>
                {showMore && (
                  <p>
                    Lorem ipsum dolor sit amet, <br></br> consectetuer
                    adipiscing elit. Aenean
                  </p>
                )}
                <div onClick={toggleShowMore} style={{ cursor: "pointer" }}>
                  <p className="text-primary">Learn More</p>
                  <Image
                    src={rarrow}
                    fluid
                    className="mx-auto d-block"
                    style={{ marginTop: "-41px>" }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <div className="d-flex ">
              <div>
                <Image src={paper} fluid className="mx-auto d-block" />
              </div>
              <div className="ps-4">
                <h6>
                  This How to use an eye <br></br> catching CV, Approved to{" "}
                  <br></br> get jobs!
                </h6>
                <p>June 10,2023</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing
                  elit. Aenean
                </p>
                {showMore && (
                  <p>
                    Lorem ipsum dolor sit amet, <br></br> consectetuer
                    adipiscing elit. Aenean
                  </p>
                )}
                <div onClick={toggleShowMore} style={{ cursor: "pointer" }}>
                  <p className="text-primary">Learn More</p>
                  <Image
                    src={rarrow}
                    fluid
                    className="mx-auto d-block"
                    style={{ marginTop: "-41px>" }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex ">
              <div>
                <Image src={paper} fluid className="mx-auto d-block" />
              </div>
              <div className="ps-4">
                <h6>
                  This How to use an eye <br></br> catching CV, Approved to{" "}
                  <br></br> get jobs!
                </h6>
                <p>June 10,2023</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing
                  elit. Aenean
                </p>
                {showMore && (
                  <p>
                    Lorem ipsum dolor sit amet, <br></br> consectetuer
                    adipiscing elit. Aenean
                  </p>
                )}
                <div onClick={toggleShowMore} style={{ cursor: "pointer" }}>
                  <p className="text-primary">Learn More</p>
                  <Image
                    src={rarrow}
                    fluid
                    className="mx-auto d-block"
                    style={{ marginTop: "-41px>" }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
