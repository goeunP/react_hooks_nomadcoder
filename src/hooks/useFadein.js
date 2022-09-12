import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//   const fadeInP = UseFadeIn(5, 4);
//   const fadeinH1 = UseFadeIn(1, 2);
//   return (
//     <div>
//       <h1 {...fadeinH1}>hello</h1>
//       <p {...fadeInP}>hasdfasdfasdfasdfasdf</p>
//     </div>
//   );
// };

export default useFadeIn;
