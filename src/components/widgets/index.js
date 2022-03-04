import React from "react";
import Breaking from "./breaking-news";
import Weather from "./weather";
import { WidgetsWrapper } from "./widgetElements";

const Widgets = () => {
  return (
    <WidgetsWrapper>
      <Breaking></Breaking>
      <Weather></Weather>
    </WidgetsWrapper>
  );
};

export default Widgets;
