import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";

// projects
import L_UCLA from "../../assets/img/projects/UCLA health.jpg";
import L_unionbank from "../../assets/img/projects/unionband.jpg";
import L_DINE from "../../assets/img/projects/DINE.png";
import L_Molina from "../../assets/img/projects/Molina.png";
import L_Darden from "../../assets/img/projects/Darden.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Timeline>
        <Events>
        
        <ImageEvent
            date="Jan 2021 - Present"
            className="text-center"
            text="IT Project Manager"
            src={L_UCLA}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>UCLA Healthcare, Los Angeles, CA </strong> <br/>
                      An IT Project Manager who is leading, directing and executing projects for the leading hospital in Los Angeles and ranked sixth in the entire USA. My focus of projects is in the Office of Health Informatics and Analytics. Working on infrastructure and Data Analytic projects. 

                        <hr />
                        <ul className="list-styles pt-1">
                          <li>Implementing Power BI to the enterprise to harness the cost saving efficiency and using technology for a high ROI.</li>
                          <li>Upgrade the Collibra Platform to the newest Data Governance, to establish a shared business language which will be scalable.</li>
                          <li>Mule Soft Upgrade, as a part of the Collibra Platform Upgrade, we are simultaneously upgrading Mule Soft with the latest version.</li>
                          <li>Azure Migration, for Data Warehousing.</li>
                          <li>Clarity Server Upgrade</li>
                          <li>Infrastructure procurement</li>
                          <li>Risk Assessment</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>


{/* Project: MERN Tip Calculator */}
<ImageEvent
            date="Nov 2019 - Mar 2020"
            className="text-center"
            text="Change Project Manager"
            src={L_unionbank}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Union Bank. Monterey Park, CA </strong><br/>
                      Responsible for handling a critical Matter Requiring Attention (MRA) for a large International Bank. Used a structured ADKAR Analysis model approach to effectively drive organizational success. Responsible for leading the project including Business Analysis/Requirements Gathering to remediate vulnerabilities for approximately 15678 devices worldwide, 73 Software Packages and 73467 vulnerabilities. As the Change Manager I worked as a coach for senior leaders and executives in helping them fulfill the role of change sponsor. I created & implemented change management strategies and plans that maximized employee adoption and usage, which minimized resistance. This led to increased benefit realization, value creation, ROI and achieved the desired results and outcomes on a global change management project.
                        <hr />
                        <ul className="list-styles pt-1">
                          <li>Created an ADKAR Analysis model to guide, communicate and coach the stakeholders.</li>
                          <li>Developed test cases from analyzing business, functional, system requirements and diagrams during the design phase of projects that achieved 100% accuracy.</li>
                          <li>Used a 4 step iterative process of requirement gathering- Requirements Elicitation/Analyzing Requirements/Validating Requirements/Documenting Requirements.</li>
                          <li>Got agreement on KPI from stakeholders reviewed them weekly and adjusted them appropriately as the changing needs of the business.</li>
                          <li>Got agreement on KPI from stakeholders reviewed them weekly and adjusted them appropriately as the changing needs of the business.</li>
                          <li>Select software that will mitigate the vulnerability, get a new package built and then did a UAT, on successful completion of UAT it was pushed to users.</li>
                          <li>Communicate with internal users about the change process and ensure that no business activities are affected by these changes.</li>
                          <li>Follow the Change Control Protocols to ensure that risk is mitigated.</li>
                          <li>Put in Evergreen Process so this risk is mitigated continuously, by documenting who owned the software, monthly tracking of CVE, designated testers.</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Get GitHub Info */}
          <ImageEvent
            date="May 2019 - Aug 2019"
            className="text-center"
            text="International IT Project Manager"
            src={L_DINE}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Dine Brands Global, Inc.  Glendale, CA</strong><br/>
                      Hired to standardize and streamline international New Restaurant Openings for Dine Brands Global, Inc worldwide expansion. This opening in Ecuador was used as the benchmark for all future international openings.
                        <hr />
                        <ul className="list-styles pt-1">
                          <li>Selected Oracle as the Hardware Supplier as well as used their Enterprise Menu Server, which we spun up on our own AWS This combination helped in standardizing the menu management, hardware and better data analytics.</li>
                          <li>Built a test lab at the Glendale Restaurant Support Center to build the exact replica of the hardware and software that will be used in Ecuador and further international openings.</li>
                          <li>Used Oracle’s team to setup the hardware, software, and used AWS to keep the EM server with Database.</li>
                          <li>Worked with the Ecuador team to order hardware and ensure they were using the same version of software, hardware.</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent
            date="Jul 2013 - May 2019"
            className="text-center"
            text="IT Project Manager"
            src={L_Molina}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Molina Healthcare, Inc. Long Beach, CA</strong><br/>
                        IT PM assigned to the Enterprise Infrastructure Services team, provided project management and leadership for all IT infrastructure. Drove infrastructure projects, integration, new health plans, infrastructure upgrades, relocations, site expansions.
                        <hr />
                        <ul className="list-styles pt-1">
                          <li>IT PM for the Molina Healthcare of Puerto Rico Health plan, with an IT Budget of $3.8 million for over 710 employees.</li>
                          <li>Implemented a sunken IT assets infrastructure reuse program when bringing up the Mississippi health plan for over 287 employees and reduced cost by $739,000.</li>
                          <li>Successfully opened the South Carolina health plan in 63 days due to delay in being awarded the contract by the state.</li>
                          <li>Responsible for opening the Molina Medicaid Solution office in the US Virgin Islands.</li>
                          <li>Led the integration of Integrated Care Alliance (ICA) to Molina Healthcare, Inc While maintaining ICA as a separate entity, but using our IT Infrastructure (servers, panzura storage devices, outlook, website) and facilities.</li>
                          <li>Windows 2003 to Windows 2012 server upgrade, we had to upgrade over 691 servers along with server application and enterprise software.</li>
                          <li>Led skills development effort for infrastructure support staff in areas of Agile Project Management, Business Objectives and Program Management.</li>
                          <li>Managed people with diverse skill sets and reporting structure, which allowed me to build a rapport across teams in a matrix organization.</li>
                          <li>Providing effective communication between all stakeholders, contributors, customers to ensure they were well informed and had the latest information.</li>
                          <li>Kaizen- constantly used feedback from all stakeholders, contributors, customers, sponsors on how we could improve our process for our next project.</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent
            date="Jan 1994 - Jan 2012"
            className="text-center"
            text="Project Manager"
            src={L_Darden}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>Darden, Inc. Orlando, FL</strong><br/>
                        <ul className="list-styles pt-1">
                          <li>Coordinated the implementation of 9 IT Upgrades including hardware and software installation with a total budget of $775,000.</li>
                          <li>Coordinated with numerous vendors/contractors and stakeholders to execute a seamless IT instillation experience, VoiP(Voice over Internet Protocol).</li>
                          <li>Conducted end-to-end daily testing to ensure quality systems delivery and to prevent system emergencies prior to handing over the product to clients.</li>
                          <li>Assisted project managers for adding new business locations with a budget of over $8.2 Million while reducing schedule by 2 weeks.</li>
                          <li>Planned structural remodel for business operations with a budget of 2.9 Million.</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
