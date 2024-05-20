import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import Homee from "./components/Homee";
import Header from "./components/AppHeader";
import Contact from "./components/Contact";
import About from "./components/About";
import JobList from "./components/JobList";

// import Header from "./components/AppHeader";
// import Homee from "./components/Homee";
// import About from "./components/About";
// import JobList from "./components/JobList";
// import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Homee />} />
        <Route path="/About" element={<About />} />
        <Route path="/JobList" element={<JobList />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
