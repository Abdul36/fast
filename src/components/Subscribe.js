import React from "react";

export default function Subscribe() {
  return (
    <div>
      <section style={{ backgroundColor: "#F8FBFF" }}>
        <div className="container">
          <h3 className="text-center pt-4">SUBSCRIBE NEWSLETTER</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br> incididunt ut labore et dolore magna
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="form-control mr-2 mb-3 mb-md-0"
              style={{
                maxWidth: "200px",
                borderRadius: "6px",
                borderColor: "#2B72EE",
              }}
              placeholder="Email"
            />
            <button
              className="btn btn-primary ms-2"
              style={{
                borderRadius: "11px",
                padding: "10px 33px",
              }}
            >
              Subscribe
              <br></br>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
