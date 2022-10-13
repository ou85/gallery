import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SimpleGallery from "./simple-gallery";
import Gallery from "./gallery";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<SimpleGallery />} />
      <Route exact path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
  // <SimpleGallery />
  // <React.StrictMode>
  //   <SimpleGallery />
  //   {/* <Gallery /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
