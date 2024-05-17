import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Lists() {
  const [jobVacancies, setJobVacancies] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [peopleHired, setPeopleHired] = useState(0);
  const [satisfiedUsers, setSatisfiedUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the values gradually
      setJobVacancies((prev) => {
        const nextValue = prev + 1;
        return nextValue >= 125 ? 125 : nextValue;
      });

      setCompanies((prev) => {
        const nextValue = prev + 1;
        return nextValue >= 740 ? 740 : nextValue;
      });

      setPeopleHired((prev) => {
        const nextValue = prev + 1;
        return nextValue >= 999 ? 999 : nextValue;
      });

      setSatisfiedUsers((prev) => {
        const nextValue = prev + 1;
        return nextValue >= 95 ? 95 : nextValue;
      });
    }, 20); // Adjust the interval to control the speed of counting

    // Clear interval if the target numbers are reached
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container
        style={{ backgroundColor: "#2B72EE" }}
        className="carsouse py-5"
      >
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={3} className="text-center">
            <h4 className="text-white">{jobVacancies}+</h4>
            <p className="text-white">New Job Vacancies</p>
          </Col>
          <Col xs={12} sm={12} md={3} className="text-center">
            <h4 className="text-white">{companies}+</h4>
            <p className="text-white">Company World Wide</p>
          </Col>
          <Col xs={12} sm={12} md={3} className="text-center">
            <h4 className="text-white">{peopleHired}+</h4>
            <p className="text-white">People Hired</p>
          </Col>
          <Col xs={12} sm={12} md={3} className="text-center">
            <h4 className="text-white">{satisfiedUsers}%</h4>
            <p className="text-white">Satisfied User</p>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  );
}
