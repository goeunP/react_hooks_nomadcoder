import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListenr("click", onClick);
    }
  });
  return element;
};

// const App = () => {
// const sayHello = () => console.log("say hello");
//   const title = useClick(sayHello);
//   return (
//     <div>
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };
