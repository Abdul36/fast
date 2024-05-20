import React from "react";
import { Image } from "react-bootstrap";

import flogo from "../Assets/Images/flogo.png";
import github from "../Assets/Images/github.png";
import globe from "../Assets/Images/globe.png";
import insta from "../Assets/Images/insta.png";
import facebook from "../Assets/Images/facebook.png";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <div className="container-fluid footer pt-4">
        <div className="container" style={{ paddingTop: "30px" }}>
          {/* Footer Lists */}
          <div className="container-fluid">
            <div className="d-md-flex justify-content-center align-items-start">
              <div className="d-flex flex-column">
                <Image src={flogo} fluid className="mx-auto d-block" />
                <p style={{ color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetuer <br />
                  adipiscing elit. Aenean commodo ligula
                  <br /> eget dolor. Aenean massa. Lorem ipsum dolor <br /> sit
                  amet, consectetuer adipiscing elit.
                  <br /> Aenean commodo ligula eget dolor.
                  <br /> Aenean massa.
                </p>
                <div className="d-none d-md-flex flex-wrap gap-3">
                  <div className="box">
                    <Image src={github} fluid className="mx-auto d-block" />
                  </div>
                  <div className="box">
                    <Image src={globe} fluid className="mx-auto d-block" />
                  </div>
                  <div className="box">
                    <Image src={insta} fluid className="mx-auto d-block" />
                  </div>
                  <div className="box">
                    <Image src={facebook} fluid className="mx-auto d-block" />
                  </div>
                </div>
              </div>
              <div
                className="footer-useful ms-md-4 d-flex flex-column mt-4"
                style={{ color: "white" }}
              >
                <div className="row">
                  {/* Quick Links */}
                  <div className="col-md-6 col-sm-6">
                    <h2>Quick Links</h2>
                    <ul className="p-0">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Job List</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  {/* Get in Touch */}
                  <div className="col-md-6 col-sm-6 mt-md-0 mt-4">
                    <h2 style={{ whiteSpace: "nowrap" }}>Get in Touch</h2>
                    <ul className="p-0">
                      <li>
                        <a href="#" style={{ whiteSpace: "nowrap" }}>
                          457 Morningview Lane, NY
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">example@gmail.com</a>{" "}
                      </li>
                      <li>
                        <a href="#">+1 (234) 567 890</a>{" "}
                      </li>
                      <li>
                        <a href="#">07.00 AM - 19.00 PM</a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column ms-md-4 mt-4">
                <h2 style={{ color: "white" }}>Support</h2>
                <ul className="p-0">
                  <li>
                    <a href="#">Help Center</a>{" "}
                  </li>
                  <li>
                    <a href="#">Career</a>{" "}
                  </li>
                  <li>
                    <a href="#">Contact</a>{" "}
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>{" "}
                  </li>
                </ul>
              </div>
              <div className="d-md-none d-flex gap-3 ms-md-4 mt-4">
                <div className="box">
                  <Image src={github} fluid className="mx-auto d-block" />
                </div>
                <div className="box">
                  <Image src={globe} fluid className="mx-auto d-block" />
                </div>
                <div className="box">
                  <Image src={insta} fluid className="mx-auto d-block" />
                </div>
                <div className="box">
                  <Image src={facebook} fluid className="mx-auto d-block" />
                </div>
              </div>
            </div>
            <hr style={{ backgroundColor: "white" }} />
            <p className="text-center" style={{ color: "white" }}>
              © All Rights Reserved 2023
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
