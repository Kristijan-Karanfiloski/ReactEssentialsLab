import React from "react";

//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//                  spread = expands an array into seperate elements
//                  rest=bundles seperate elements into an array

function RestParameters() {
  function openFridge(...foods) {
    console.log(...foods);
  }

  function getFood(...foods) {
    return foods;
  }

  const food1 = "pizza";
  const food2 = "hamburger";
  const food3 = "hotdog";
  const food4 = "sushi";
  const food5 = "ramen";

  openFridge(food1, food3, food2, food4, food5);

  const foods = getFood(food1, food2, food3, food4, food5);
  console.log(foods);

  function sum(...numbers) {
    let result = 0;

    for (let number of numbers) {
      result += number;
    }

    return result;
  }

  function getAverage(...numbers) {
    let result = 0;

    for (let num of numbers) {
      result += num;
    }

    return result / numbers.length;
  }

  const average = getAverage(100, 200, 300);
  console.log("Your average is " + average);

  const total = sum(1);

  console.log("Your total is " + sum(1, 2, 3, 4));

  function combineStrings(...strings) {
    return strings.join(" ");
  }

  const fullName = combineStrings("Kristijan", "Karanfiloski");

  console.log("FULL NAME", fullName);

  return (
    <div>
      <h1>Rest Parametars</h1>
    </div>
  );
}

export default RestParameters;
