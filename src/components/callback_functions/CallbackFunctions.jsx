import React from "react";

// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations:
//           1. Reading a file
//           2. Network requests
//           3. Interacting with databases

//           Hey when you're done , call this next.

function CallbackFunctions() {
  hello(goodBye);

  function hello(callback) {
    console.log("Hello!");
    callback();
  }

  function goodBye() {
    console.log("Goodbye!");
  }
  function sum(callback, x, y) {
    let result = x + y;
    callback(result);
  }

  function displayResult(result) {
    console.log(result);
  }

  const resultFromTheSum = sum(displayResult, 3, 2);

  console.log(resultFromTheSum);

  return (
    <div>
      <h1>Callback Functions</h1>
    </div>
  );
}

export default CallbackFunctions;
