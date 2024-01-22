import React, { useState, useEffect } from "react";

// function = A section of reusable code.
//            Declare code once,use it whenever you want.
//            Call the function to execute the code.

function FunctionsJS() {
  const [resultFromFunction, setResultFromFunction] = useState("");

  console.log("RESULT FROM THE STATE :", resultFromFunction);

  //age,username are parameters
  function happyBirthday(age, username) {
    // console.log("Happy birthday to you!");
    // console.log(`Happy birthday dear ${username} !`);
    // console.log("Happy birthday to you!");
    // console.log(`You are ${age} years old!`);

    return `${username} ti si bot i si ${age} godini`;
  }

  // 30,'Kristijan' are arguments redosledot e najbiten
  happyBirthday(30, "Kristijan");

  console.log(happyBirthday(30, "Kristijan"));
  //   happyBirthday("Kristijan", 30);

  function add(x, y) {
    const result = x + y;

    setResultFromFunction(result);

    // return result;
  }

  function handleAddition() {
    add(10, 20);
  }

  //   useEffect(() => {
  //     add(3, 5);
  //   }, []);

  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={handleAddition}>
        FUNCTIONS JS
      </h1>
      <p>{resultFromFunction}</p>
    </div>
  );
}

export default FunctionsJS;
