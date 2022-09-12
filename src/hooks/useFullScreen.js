import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const trrigerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return element, trrigerFull;
};
const App = () => {
  const { element, triggerFull } = useFullScreen();
  return (
    <>
      <img ref={element} src="https://www.bbc.com/korean/features-62488296" />
      <button onClick={triggerFull}>Make Fullscreen</button>
    </>
  );
};

export default useFullScreen;
