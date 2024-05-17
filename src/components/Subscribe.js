import React from "react";

export default function Subscribe() {
  return (
    <div>
      <section style={{ backgroundColor: "#F8FBFF" }}>
        <container>
          <h3 className="text-center pt-4">SUBSCRIBE NEWSLETTER</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br> incididunt ut labore et dolore magna
          </p>
          <input
            type="text"
            style={{ marginLeft: "35%", height: "35px", borderRadius: "6px" }}
            placeholder="Email"
          />
          <button
            className="bg-primary text-white ml-3"
            style={{
              marginLeft: "15px",
              border: "none",
              borderRadius: "11px",
              padding: "10px 33px",
            }}
          >
            Subscribe
          </button>
          <br></br>
          <br></br>
        </container>
      </section>
    </div>
  );
}
