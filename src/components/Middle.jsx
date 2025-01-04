import React from "react";
import Child from "./Child";

function MiddleComponent(parentName) {
  return (
    <div>
      <h2>Middle Component</h2>
      {/* Passing down props to the child */}
      <Child userName={parentName.userName} />
    </div>
  );
}

export default MiddleComponent;
