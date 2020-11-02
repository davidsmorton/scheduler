import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    setMode(newMode);

    replace &&
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    !replace && setHistory((prev) => [...prev, newMode]);
  };

  const back = function () {
    const newHistory = [...history];

    history.length > 1 && newHistory.pop();

    setMode(newHistory[newHistory.length - 1]);
    setHistory(newHistory);
    console.log("New HISTORY", newHistory);
  };

  return { mode, transition, back };
};

// code provided by AR call used for refactor

// const useVisualMode = (initialMode) => {
//   const [mode, setMode] = useState(initialMode);
//   const [history, setHistory] = useState([initialMode]);
//   const transition = (mode, replace = false) => {

//     if (replace) {
//       setHistory((prev) => [...prev.slice(0, prev.length - 1), mode]);
//     } else {
//       setHistory((prev) => [...prev, mode]);
//     }
//     setMode(mode);
//   };
//   const back = () => {
//     const newHistory = [...history];
//     if (history.length > 1) {
//       newHistory.pop();
//     }
//     setMode(newHistory[newHistory.length - 1]);
//     setHistory(newHistory);
//   };
//   return { mode, transition, back };
// };
export default useVisualMode;
