import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // I think I need a conditional on this but not sure what to do
  // Need to push a new mode when replace is true

  const transition = function (newMode, replace = false) {
    setMode(newMode);
    replace && history.pop();
    setHistory(history.concat([newMode]));
  };

  const back = function () {
    history.length > 1 && history.pop();

    setHistory([...history]);
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
};

export default useVisualMode;
