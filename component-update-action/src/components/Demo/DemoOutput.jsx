import React from "react";

const DemoOutput = (props) => {
  console.log("demooutput RUNNING");
  return <p>{props.show ? "This is a new!" : ""}</p>;
};

export default React.memo(DemoOutput);
