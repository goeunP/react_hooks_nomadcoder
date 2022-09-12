import React from "react";
import useTabs from "./hooks/useTabs";
import UseEffectPrac from "./hooks/useEffect";
import useFadeIn from "./hooks/useFadein";
import useScroll from "./hooks/useScroll";
import useFullScreen from "./hooks/useFullScreen";
import useNotification from "./hooks/useNotification";

const App = () => {
  const fadeInP = useFadeIn(4, 3);
  const fadeinH1 = useFadeIn(1, 1);
  const triggerNotif = useNotification("notification !!");
  const { y } = useScroll();
  return (
    <>
      <div>
        <h1 {...fadeinH1}>useFadeIn</h1>
        <p {...fadeInP}>useFadeIn with 4 delay and 5 duration</p>
      </div>
      <button onClick={triggerNotif}>Notification btn</button>

      <div className="App" style={{ height: "500vh" }}>
        <h1 style={{ color: y > 10 ? "red" : "blue" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
      </div>
    </>
  );
};

export default App;
