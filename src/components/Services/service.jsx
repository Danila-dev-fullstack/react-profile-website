import React from 'react';
import pmanagement from "../../assets/img/projects/pmanagement.jpg";
import cmanagement from "../../assets/img/projects/cmanagement.jpg";
import tc from "../../assets/img/projects/t & c.jpg";
import npleadership from "../../assets/img/projects/npleadership.jpg";
import "./service.css";

function service() {
    return (
        <div id="service" className="container">
            <h1 className="text-center mt-5 mb-5">SERVICES</h1>
            <div className="row flex mb-5">
                <div className="col-6"><img className="pimage" src={pmanagement} alt="" /></div>
                <div className="col-6 d-flex align-items-center justify-content-end row">
                    <h2 className="col-12 d-flex justify-content-center">Project Management</h2>
                    <h4 className="col-12 pl-5">
                    <li>Successful projects are the result of:</li>
                    <li>Careful planning.</li>
                    <li>Effective stakeholder management.</li>
                    <li>Transparency and coordinated delivery.</li>
                    <li>Strong project managers embody.</li>
                    <li>Excellent judgment.</li>
                    <li>Identify risks or issues early.</li>
                    </h4>
                </div>
            </div>
            <div className="row flex mb-5">
                <div className="col-6"><img className="pimage" src={cmanagement} alt="" /></div>
                <div className="col-6 d-flex align-items-center justify-content-end row">
                    <h2 className="col-12 d-flex justify-content-center">Change Management</h2>
                    <h4 className="col-12 pl-5">
                    <li>Keith is passionate about helping clients solve complex challenges and supporting them through critical transformations.</li>
                    <li>Keith will deliver change management, organization design and governance, culture and technology adoption solutions that enable the success of transformation goals for industry leading clients.</li>
                    </h4>
                </div>
            </div>
            <div className="row flex mb-5">
                <div className="col-6"><img className="pimage" src={tc} alt="" /></div>
                <div className="col-6 d-flex align-items-center justify-content-end row">
                    <h2 className="col-12 d-flex justify-content-center">Training and Coaching</h2>
                    <h4 className="col-12 pl-5">
                    <li>Get teams on the same page.</li>
                    <li>Implementing programs/tools/techniques.</li>
                    <li>Understand the shared vision.</li>
                    </h4>
                </div>
            </div>
            <div className="row flex mb-5">
                <div className="col-6"><img className="pimage" src={npleadership} alt="" /></div>
                <div className="col-6 d-flex align-items-center justify-content-end row">
                    <h2 className="col-12 d-flex justify-content-center">Non Profit Leadership</h2>
                    <h4 className="col-12 pl-5">
                    <li>Leading and understanding how non profits work needs someone who has lead numerous Non Profit organization, working with the voluteer base, donors, takes a different skill set.</li>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default service
