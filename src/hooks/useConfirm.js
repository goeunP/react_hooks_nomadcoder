import React, { useState, useEffect } from "react";

const useConfirm = (message, callback) => {
  if (callback && typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback;
    }
  };
  return confirmAction;
};

export default useConfirm;
