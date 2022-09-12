import React, { useState, useEffect } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.usePrevenDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
};

export default usePreventLeave;
