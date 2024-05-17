import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Row, Col } from "react-bootstrap";

const Progress = () => {
  return (
    <div>
      <Row>
        <Col>
          <h6 className="pt-2">Hiring</h6>
          <p className="mb-0" style={{ marginLeft: "79%", marginTop: "-13px" }}>
            90%
          </p>
          <ProgressBar now={90} style={{ width: "90%", height: "10px" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="pt-2">Recruitment</h6>
          <p className="mb-0" style={{ marginLeft: "70%", marginTop: "-13px" }}>
            80%
          </p>
          <ProgressBar now={80} style={{ width: "90%", height: "10px" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="pt-2">Development</h6>
          <p className="mb-0" style={{ marginLeft: "74%", marginTop: "-13px" }}>
            85%
          </p>
          <ProgressBar now={85} style={{ width: "90%", height: "10px" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="pt-2">Interview</h6>
          <p className="mb-0" style={{ marginLeft: "83%", marginTop: "-13px" }}>
            95%
          </p>
          <ProgressBar now={95} style={{ width: "90%", height: "10px" }} />
        </Col>
      </Row>
    </div>
  );
};

export default Progress;
