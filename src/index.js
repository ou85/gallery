import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MuiGallery from "./mui-gallery";
import SimpleGallery from "./simple-gallery";
import ImageSwapper from "./components/image-swapper";
import MuiSwapper from "./mui-swapper";
import Tabs from "./components/tabs";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<SimpleGallery />} />
      <Route exact path="/swapper" element={<ImageSwapper />} />
      <Route exact path="/gallery" element={<SimpleGallery />} />
      <Route exact path="/mui-gallery" element={<MuiGallery />} />
      <Route exact path="/mui-swapper" element={<MuiSwapper />} />
      <Route exact path="/tabs" element={<Tabs />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
