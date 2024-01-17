import React, { useEffect, useRef, useState } from "react";

//useState()= Re-renders the component whjen the state value changes

//  useRef() = 'use Referance' Does not cause re-renders when its value changes.
//              when you want a component to 'remember' some information
//              but you dont want that  information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus , Animations , and Transitions
//              3. Manging Timers and intervals

function UseRefHook() {
  //   const [number, setnumber] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  const handleClick1 = () => {
    // setnumber((n) => n + 1);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "lightblue";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "lightblue";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "lightblue";
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />
      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />
      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRefHook;
