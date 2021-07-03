import React from 'react';
import "./certificate.css";
import certi01 from "../../assets/img/certificate/certi03.png";
import certi02 from "../../assets/img/certificate/certi01.png";
import certi03 from "../../assets/img/certificate/certi02.png";

function certificate() {
    return (
        <div className="container" id="certificate">
            <div className="row">
                <div className="flex justify-content-center row align-center mb-3">
                    <div className="col-12 mt-4 mb-4"><h1 className="text-center">CERTIFICATE</h1></div>
                    <div className="col-4"><img src={certi01} alt="" className="certi-img"/></div>
                    <div className="col-4"><img src={certi02} alt="" className="certi-img"/></div>
                    <div className="col-4"><img src={certi03} alt="" className="certi-img"/></div>
                </div>
            </div>
        </div>
    )
}

export default certificate
