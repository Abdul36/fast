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
import HeroT from "./components/HeroT";
import Get from "./components/Get";
import Cal from "./components/Cal";

// import Header from "./components/AppHeader";
// import Homee from "./components/Homee";
// import About from "./components/About";
// import JobList from "./components/JobList";
// import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Get /> */}
      {/* <Cal /> */}
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
