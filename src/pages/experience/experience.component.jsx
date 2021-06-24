import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li><strong>Western Governors University</strong> <br/>Bachelor in Science, Business Administration and Management, General</li>
                      <li><strong>Les Roche International School of Hotel Management</strong> <br/>Diploma in Hotel & Tourism Management, Hotel, Motel and Restaurant Management</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
