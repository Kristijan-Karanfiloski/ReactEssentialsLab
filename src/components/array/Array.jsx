// array = a varible like structure that can hold more then 1 value

import React from "react";

function Array() {
  let fruits = ["apple", "orange", "bannana"];

  fruits[1] = "coconut";

  let index = fruits.indexOf("apple");

  for (let index = 0; index < fruits.length; index++) {
    // const element = fruits[index];
    console.log(fruits[index]);
  }

  for (let index = fruits.length - 1; index >= 0; index--) {
    // const element = fruits[index];
    console.log("REVERSED ARRAY :", fruits[index]);
  }

  for (let fruit of fruits) {
    console.log(fruit);
  }

  //sorting array

  fruits.sort().reverse();

  console.log(fruits[0]);
  console.log(index);

  return (
    <div>
      <h1>Arrays</h1>
    </div>
  );
}

export default Array;
