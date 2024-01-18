import React from "react";

// .map() = accepsts a callback and applies that function
//          to each element of the array, then return a new array
//          the map method dosent mutates the original array

function MapMethod() {
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(square);
  const cubes = numbers.map(cube);

  console.log("SQUERED :", squares);
  console.log("CUBED :", cubes);

  function square(element) {
    return Math.pow(element, 2);
  }

  function cube(element) {
    return Math.pow(element, 3);
  }

  ////////////////////////////////////////////////////

  const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
  const formated = dates.map(formatDates);

  console.log("FORMATED:", formated);

  function formatDates(element) {
    const parts = element.split("-");
    return parts[1] + "/" + parts[3] + "/" + parts[2];
  }

  return (
    <div>
      <h1>Array map method!</h1>
    </div>
  );
}

export default MapMethod;
