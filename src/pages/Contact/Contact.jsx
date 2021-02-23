import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-4">Contact</h1>
          <div className="my-4">
            <div className="row"></div>
            <p>
              <b>Email</b> - kbuttimer4@gmail.com
            </p>
            <p>
              <b>Phone</b> - (912)220-9860
            </p>
            <div className="row">
              <div className="col-12">
                <p className="p1">
                  <a href="https://github.com/KevinB04">GitHub</a>
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="p2">
                      <a href="https://www.linkedin.com/in/kevin-buttimer-9b5b3a9b/">
                        LinkedIn
                      </a>
                    </p>
                    <p className="p3">
                      <a href="C:\Users\kbutt\Desktop\Web Development Resume.pdf">
                        Resume
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
