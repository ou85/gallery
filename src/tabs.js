import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TabNavItem from "./components/tab-nav-item";
import TabContent from "./components/tab-content";

import { ImageSwapper7, ImageSwapper10 } from "./components/image-swappers";
import StaticImageGrid from "./components/static-image-grid";
import GridSwapper from "./components/grid-swapper";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="grid"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNavItem
          title="component"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNavItem
          title="function"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNavItem
          title="swapper"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TabContent id="tab1" activeTab={activeTab}>
          <StaticImageGrid />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <ImageSwapper7 />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ImageSwapper10 />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <GridSwapper />
        </TabContent>
      </Grid>
    </div>
  );
};

export default Tabs;
