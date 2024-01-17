import React from "react";
import ChildComponent from "./ChildComponentPROPS";

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value/>

function ParentComponentProps() {
  return (
    <div style={{ border: "2px solid blue", padding: "2rem" }}>
      <h1>Parent Component</h1>
      <div>
        <ChildComponent name="Krisitjan" age={30} isStudent={true} />
        <ChildComponent name="Dragan" age={31} isStudent={false} />
        <ChildComponent name="Dime" age={50} isStudent={false} />
        <ChildComponent name="Risto" age={31} isStudent={false} />
        <ChildComponent name="Ile" />
      </div>
    </div>
  );
}

export default ParentComponentProps;
