import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Card4 from "./Components/Card4";
import Card5 from "./Components/Card5";
import Card6 from "./Components/Card6";

export default function ShowcaseLayout({ onLayoutChange }) {
  const layouts = { 
    lg: [
      {x: 0, y: 0, w: 4, h: 4, i: "0"},
      {x: 4, y: 0, w: 4, h: 4, i: "1"},
      {x: 8, y: 0, w: 4, h: 3, i: "2"},
      {x: 0, y: 4, w: 4, h: 3, i: "3"},
      {x: 4, y: 4, w: 4, h: 4, i: "4"},
      {x: 8, y: 3, w: 4, h: 4, i: "5"}
    ]
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        // WidthProvider option
        measureBeforeMount={true}
        compactType = "vertical"
      >
        <div key={0}>
          <Card1 />
        </div>
        <div key={1}>
          <Card2 />
        </div>
        <div key={2}>
          <Card3 />
        </div>
        <div key={3}>
          <Card4 />
        </div>
        <div key={4}>
          <Card5 />
        </div>
        <div key={5}>
          <Card6 />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};