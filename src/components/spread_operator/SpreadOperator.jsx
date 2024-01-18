import React from "react";

// spread operator = ... allows an iterable such a array or stirng to be expanded into seperate elements (unpacks the elements)

function SpreadOperator() {
  let numbers = [1, 2, 3, 4, 5];
  let fruits = ["apple", "orange", "bannana"];
  let vegetables = ["carrots", "celery", "potatoes"];

  // making a new shallow copy
  let newFruits = [...fruits];

  console.log("NEW FRUITS", newFruits);

  //combaining two arrays

  let foods = [...fruits, ...vegetables, "eggs", ",milk"];

  console.log(foods);

  let maximum = Math.max(...numbers);
  let minimum = Math.min(...numbers);

  let username = "Krisitjan";

  let letters = [...username].join("-");

  console.log(letters);
  console.log(maximum);
  console.log(minimum);

  return (
    <div>
      <h1>Spread Operator</h1>
    </div>
  );
}

export default SpreadOperator;
