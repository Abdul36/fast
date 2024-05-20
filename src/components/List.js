// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Image,
//   Row,
//   Col,
//   Carousel,
//   Card,
//   Form,
//   Button,
// } from "react-bootstrap";

// import Header from "./AppHeader";
// import Available from "../components/Available";
// import Lists from "../components/Counter";
// // Images

// import jobl from "../Assets/Images/jobl.png";
// import round from "../Assets/Images/round.png";
// import mail from "../Assets/Images/mail.png";
// import phone from "../Assets/Images/phone.png";
// import location from "../Assets/Images/location.png";
// import website from "../Assets/Images/website.png";
// import Footer from "../components/Footer";

// export default function List() {
//   return (
//     <div>
//       <Header />
//       <section>
//         <Container
//           fluid
//           style={{ margin: "0px", minHeight: "auto" }}
//           className="pos"
//         >
//           <Row className="align-items-center">
//             {/* Left column for text */}
//             <Col xs={12} sm={7} className="mt-3 mt-sm-0">
//               <h2 className="text-center" style={{ color: "#0d6efd" }}>
//                 <b>Job List</b>{" "}
//               </h2>
//               <p
//                 className="text-justify"
//                 style={{ paddingLeft: "150px", paddingRight: "20px" }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
//                 <br></br>
//                 tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               </p>
//               <br></br>
//               <br></br>
//               <br></br>
//             </Col>
//             {/* Right column for image */}
//             <Col
//               xs={12}
//               sm={5}
//               className="text-center text-sm-start"
//               style={{
//                 backgroundColor: "#0d6efd",
//                 position: "relative",
//                 top: "-70px",
//                 paddingRight: "0",
//                 paddingLeft: "0",
//               }}
//             >
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <Image
//                 src={jobl}
//                 fluid
//                 className="mx-auto d-block"
//                 style={{ position: "relative", left: "-10px", width: "100%" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       {/* Available Jobs */}
//       <Available />
//       <br></br>
//       <Lists />
//       <br></br>
//       <section>
//         <Container className="double">
//           <Row>
//             <Col xs={12} md={6}>
//               <Carousel>
//                 <Carousel.Item>
//                   <Card
//                     style={{
//                       width: "90%",
//                       height: "200px",
//                       backgroundColor: "white",
//                       borderTopRightRadius: "70px",
//                       borderBottomLeftRadius: "70px",
//                     }}
//                   >
//                     <Card.Body>
//                       <h1 className="text-center">"</h1>
//                       <p className="text-justify">
//                         " Sed dignissim faucibus venenatis. Proin eu odio magna.
//                         Nunc eget ex rhoncus, commodo sem sed, placerat est.
//                         Donec id eleifend lectus "
//                       </p>
//                       <span style={{ position: "relative", zIndex: "2" }}>
//                         <Image src={round} fluid className="mx-auto d-block" />
//                         <p
//                           className="text-center pt-4"
//                           style={{ color: "white" }}
//                         >
//                           Director
//                         </p>
//                       </span>
//                     </Card.Body>
//                   </Card>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <Card
//                     style={{
//                       width: "90%",
//                       height: "200px",
//                       backgroundColor: "white",
//                       borderTopRightRadius: "70px",
//                       borderBottomLeftRadius: "70px",
//                     }}
//                   >
//                     <Card.Body>
//                       <h1 className="text-center">"</h1>
//                       <p className="text-justify">
//                         " Sed dignissim faucibus venenatis. Proin eu odio magna.
//                         Nunc eget ex rhoncus, commodo sem sed, placerat est.
//                         Donec id eleifend lectus "
//                       </p>
//                       <Image src={round} fluid className="mx-auto d-block" />
//                       <p
//                         className="text-center pt-4"
//                         style={{ color: "white" }}
//                       >
//                         Director
//                       </p>
//                     </Card.Body>
//                   </Card>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <Card
//                     style={{
//                       width: "90%",
//                       height: "200px",
//                       backgroundColor: "white",
//                       borderTopRightRadius: "70px",
//                       borderBottomLeftRadius: "70px",
//                     }}
//                   >
//                     <Card.Body>
//                       <h1 className="text-center">"</h1>
//                       <p className="text-justify">
//                         " Sed dignissim faucibus venenatis. Proin eu odio magna.
//                         Nunc eget ex rhoncus, commodo sem sed, placerat est.
//                         Donec id eleifend lectus "
//                       </p>
//                       <Image src={round} fluid className="mx-auto d-block" />
//                       <p
//                         className="text-center pt-4"
//                         style={{ color: "white" }}
//                       >
//                         Director
//                       </p>
//                     </Card.Body>
//                   </Card>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//             <Col xs={12} md={6}>
//               <h5 className="pt-4" style={{ color: "#2B72EE" }}>
//                 Testimonial
//               </h5>
//               <h2>
//                 What They Say <br /> About Us
//               </h2>
//               <p>
//                 Uniquely promote adaptive quality vectors rather than
//                 stand-alone e-markets. Pontificate alternative architectures
//                 whereas iterate.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <br></br>
//       <br></br>
//       <section>
//         <Container className="mt-5">
//           <Row>
//             {/* Left column for contact information */}
//             <Col lg={6}>
//               <h4 style={{ color: "#0d6efd" }}>Get In Touch</h4>
//               <br />
//               <h2>
//                 Dont Hesitate <br />
//                 To Ask a Question
//               </h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//                 tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               </p>
//               <span className="d-flex ">
//                 <span style={{ display: "inline-flex", alignItems: "center" }}>
//                   <Image src={location} fluid className="mx-auto d-block" />
//                   <p style={{ marginLeft: "10px", marginTop: "12px" }}>
//                     <b>Address </b>
//                   </p>
//                   <br />
//                 </span>

//                 <span
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     marginLeft: "200px",
//                   }}
//                 >
//                   <Image src={website} fluid className="mx-auto d-block" />
//                   <p style={{ marginLeft: "10px", marginTop: "12px" }}>
//                     <b>Website </b>
//                   </p>
//                   <br />
//                 </span>
//               </span>
//               <Row>
//                 <Col className="d-flex">
//                   <p className="ps-4">457 Morningview Lane, NY</p>
//                 </Col>
//                 <Col className="d-flex">
//                   <p className="ps-4">calfinity.com</p>
//                 </Col>
//               </Row>
//               <span className="d-flex ">
//                 <span style={{ display: "inline-flex", alignItems: "center" }}>
//                   <Image src={mail} fluid className="mx-auto d-block" />
//                   <p style={{ marginLeft: "10px", marginTop: "12px" }}>
//                     <b>Email</b>
//                   </p>
//                   <br />
//                 </span>

//                 <span
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     marginLeft: "225px",
//                   }}
//                 >
//                   <Image src={phone} fluid className="mx-auto d-block" />
//                   <p style={{ marginLeft: "10px", marginTop: "12px" }}>
//                     <b>Contact</b>
//                   </p>
//                   <br />
//                 </span>
//               </span>
//               <Row>
//                 <Col className="d-flex">
//                   <p className="ps-4">Calfinity.gmail.com</p>
//                 </Col>
//                 <Col className="d-flex">
//                   <p className="ps-4">+1 (234) 567 890</p>
//                 </Col>
//               </Row>
//             </Col>
//             {/* Right column for form */}
//             <Col
//               lg={6}
//               className="pt-5 bg-primary"
//               style={{
//                 borderTopRightRadius: "65px",
//                 borderBottomLeftRadius: "65px",
//               }}
//             >
//               <Form>
//                 <p style={{ color: "white" }}>Name</p>
//                 <span className="d-flex">
//                   <span>
//                     <Form.Group
//                       className="mb-3 d-flex"
//                       controlId="formBasicEmail"
//                     >
//                       <Form.Control
//                         type="text"
//                         className="first"
//                         placeholder="First Name"
//                       />
//                     </Form.Group>
//                   </span>
//                   <span>
//                     <Form.Group
//                       className="mb-3 ms-3 d-flex"
//                       controlId="formBasicEmail"
//                     >
//                       <Form.Control
//                         type="text"
//                         className="last"
//                         placeholder="Last Name"
//                       />
//                     </Form.Group>
//                   </span>
//                   <br></br>
//                 </span>{" "}
//                 <p style={{ color: "white" }}>Email</p>
//                 <Form.Group className="mb-3  d-flex" controlId="formBasicEmail">
//                   <Form.Control
//                     type="email"
//                     className="full"
//                     placeholder="First Name"
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlTextarea1"
//                 >
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Your Message"
//                     rows={6}
//                     className="areat"
//                   />
//                 </Form.Group>
//                 <button
//                   style={{
//                     marginLeft: "40%",
//                     backgroundColor: "white",
//                     color: "#2B72EE ",
//                     padding: "8px 12px",
//                     border: "none",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   <a>
//                     <b>Send Message</b>
//                   </a>
//                 </button>
//                 {/* <p>Abdul</p> */}
//                 <br></br>
//                 <br></br>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <br></br>
//       <br></br>
//       <Footer />
//     </div>
//   );
// }
