import React from "react";

// destructuring = extract values from arrays and objects then assign them to a variable in a convenient way
//                 [] = to preform array destructuring
//                 {} = to preform object  destructuring
function DestructuringJs() {
  //  -------- EXAMPLE 1 -------------
  // SWAP THE VALUE OF TWO VARIABLES
  let a = 1;
  let b = 2;

  [a, b] = [b, a];

  console.log(a);
  console.log(b);

  //  -------- EXAMPLE 2 -------------
  //  SWAP TWO ELEMENTS IN AN ARRAY

  const colors = ["red", "green", "blue", "black", "white"];

  [colors[0], colors[4]] = [colors[4], colors[0]];

  console.log(colors);

  //  -------- EXAMPLE 3 -------------
  //  ASSIGN ARRAY ELEMENTS TO VARIABLES

  const pets = ["dog", "cat", "fish", "chicken"];

  const [firstPet, secondPet, thirdPet, ...extraPets] = pets;

  console.log(firstPet);
  console.log(secondPet);
  console.log(thirdPet);
  console.log(extraPets);

  //  -------- EXAMPLE 4 -------------
  // EXTRACT VALUES FROM OBJECTS

  const person1 = {
    firstName: "Dragan",
    lastName: "Nedelkovski",
    age: 33,
    job: "Idiot",
  };
  const person2 = {
    firstName: "Risto",
    lastName: "Botlak",
    age: 32,
  };

  console.log(person1);
  console.log(person2);
  const { firstName, lastName, age, job = "unemployed" } = person2;
  //   const { firstName, lastName, age, job } = person2;

  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(job);

  //  -------- EXAMPLE 5 -------------
  //  DESTRUCTURING IN FUNCTION PARAMETERS

  function displayPerson({ firstName, lastName, age, job }) {
    console.log("First name : " + firstName);
    console.log("Last name : " + lastName);
    console.log("Age : " + age);
    console.log("Job : " + job);
  }

  displayPerson(person1);

  return (
    <div>
      <h1>Destructuring</h1>
    </div>
  );
}

export default DestructuringJs;
