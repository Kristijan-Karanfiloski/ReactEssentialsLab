import React from "react";

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronouse code}
//           'I promise to return a value'
//           PENDING -> RESOLVED OR REJECTED
//           new Promise((resolve,reject)=>{asynchronous code})

function JavaScriptPromises() {
  //////////////////////////////////////////////////////////////////

  //1. The first  function uses a callback that will lead to callback hell
  // function walkDog(callback) {
  //   setTimeout(() => {
  //     console.log("You walk the dog");
  //     callback();
  //   }, 1500);
  // }

  //2.

  function walkDog2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dogWalked = true;

        if (dogWalked) {
          resolve("You walk the dog");
        }
        reject("You didn't walked the dog");
      });
    });
  }

  // AKO VO PRVIOT SLUCAJ NA KOJ CEJNUVAME THEN IS REJECTED DRUGITE NE NI PROBUVA DA GI RESOLVNE KAKO VO PRIMEROT POGORTE KAJ STO DOG WALKED E FALSE I ODMA PROMISOT E REJECTED

  /////////////////////////////////////////////////////////////////
  // function cleanKitchen(callback) {
  //   setTimeout(() => {
  //     console.log("You clean the Kitchen");
  //     callback();
  //   }, 2500);
  // }

  function cleanKitchen2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("You cleaned the Kitchen");
      }, 2500);
    });
  }

  //////////////////////////////////////////////////////////////////
  // function takeOutTrash(callback) {
  //   setTimeout(() => {
  //     console.log("You take out the trash");
  //     callback();
  //   },500);
  // }

  function takeOutTrash2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("You take out the trash");
      }, 2500);
    });
  }

  //////////////////////////////////////////////////////////////////
  // walkDog(() => {
  //   cleanKitchen(() => {
  //     takeOutTrash(() => {
  //       console.log("You finished all the chores");
  //     });
  //   });
  // });

  walkDog2()
    .then((value) => {
      console.log(value);
      return cleanKitchen2();
    })
    .then((value) => {
      console.log(value);
      return takeOutTrash2();
    })
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

  return (
    <div>
      <h1>Java Script Promises !</h1>
    </div>
  );
}

export default JavaScriptPromises;
