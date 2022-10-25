import React, { useState } from "react";
import { ImageSwapper7, ImageSwapper10 } from "./image-swappers";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          function
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          component
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <ImageSwapper10 /> : <ImageSwapper7 />}
      </div>
    </div>
  );
};

export default Tabs;
