import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = (event) => {
    //console.log("y", window.scrollY, "x", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  return state;
};

// const App = () => {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "500vh" }}>
//       <h1 style={{ color: y > 10 ? "red" : "blue" }}>hi</h1>
//     </div>
//   );
// };

export default useScroll;
