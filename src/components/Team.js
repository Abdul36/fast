import React from "react";
import { Container, Row, Col, Image, Card, Form } from "react-bootstrap";

import rectangle1 from "../Assets/Images/rectangle1.png";
import rectangle2 from "../Assets/Images/rectangle2.png";
import rectangle3 from "../Assets/Images/rectangle3.png";
import rectangle4 from "../Assets/Images/rectangle4.png";

export default function Team() {
  return (
    <div>
      <Container className="team-cards">
        <h5 className="text-primary text-center pt-4">Our Team</h5>
        <h3 className="text-center">Meet our Agents</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br></br> ullamcorper mattis, pulvinar dapibus.
        </p>
        <Row>
          <Col md={3}>
            <Card
              style={{
                borderTopRightRadius: "100px",
                borderBottomLeftRadius: "35px",
              }}
            >
              <Card.Img variant="top" src={rectangle1} />
              <Card.Body
                className="bg-primary text-white "
                style={{ borderBottomLeftRadius: "35px" }}
              >
                <Card.Title className="text-center">Esther Howard</Card.Title>
                <Card.Text className="text-center">HR Manager</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                borderTopRightRadius: "100px",
                borderBottomLeftRadius: "35px",
              }}
            >
              <Card.Img variant="top" src={rectangle2} />
              <Card.Body style={{ borderBottomLeftRadius: "35px" }}>
                <Card.Title className="text-center text-primary">
                  Brooklyn Simmons
                </Card.Title>
                <Card.Text className="text-center">HR Staff</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                borderTopRightRadius: "100px",
                borderBottomLeftRadius: "35px",
              }}
            >
              <Card.Img variant="top" src={rectangle3} />
              <Card.Body style={{ borderBottomLeftRadius: "35px" }}>
                <Card.Title className="text-center text-primary">
                  Jacob Jones
                </Card.Title>
                <Card.Text className="text-center">HR Staff</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                borderTopRightRadius: "100px",
                borderBottomLeftRadius: "35px",
              }}
            >
              <Card.Img variant="top" src={rectangle4} />
              <Card.Body style={{ borderBottomLeftRadius: "35px" }}>
                <Card.Title className="text-center text-primary">
                  Robert Fox
                </Card.Title>
                <Card.Text className="text-center">HR Staff</Card.Text>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>
      </Container>

      <br></br>
    </div>
  );
}
