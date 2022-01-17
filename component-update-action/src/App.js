import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToggle] = useState(false);

  console.log("app RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToogle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>allow toogle</Button>
      <Button onClick={toggleParagraphHandler}>toogle paragraph</Button>
    </div>
  );
}

export default App;
