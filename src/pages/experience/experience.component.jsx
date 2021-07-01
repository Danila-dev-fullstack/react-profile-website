import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="services">
      <h1 className="pt-3 text-center font-details-b pb-3">SERVICES</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li><strong>Website Development</strong> <br/>HTML5, CSS3, Bootstrap, JavaScript, React, Vue, Angular, Express, Node, PHP, Laravel, Python, Django, MySQL, MongoDB, jQuery, WebRTC, Jitsi, Redux, Jenkins, Payment Gateway, Git, AWS DevOps...</li>
                      <li><strong>Mobile Application Development</strong> <br/>Hybrid and Native mobile application using React Native, Java, Swift, Kotlin...</li>
                      <li><strong>Project Management</strong> <br/>Leading, Directing, and executing projects.</li>
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
