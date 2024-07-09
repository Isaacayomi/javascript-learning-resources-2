"use strict";

let arr = ["a", "b", "c", "d", "e"];

//USING THE SLICE METHOD: this method does not mutate the original array
console.log(arr.slice(-2));
console.log(arr);
console.log(arr.slice(0, 3));

//Creating a shallow copy of the first array
let shallowCopy = [...arr];

//USING THE SPLICE METHOD: this method actually mutates the original array, meaning, it changes the original array
console.log(arr.splice(0, 3));
console.log(arr); //the original array here has now been changed.
//Removing the last element of an array using the splice method (a common use case)
const customArr = [1, 2, 3, 4, 5];
console.log(customArr.splice(-3)); //removes the last element in the array
console.log(customArr); //the original array has now been changed.

//USING THE REVERSE METHOD: this method does actually mutuate the original array
const arr2 = [10, 9, 8, 7, 6];
console.log(arr2.reverse());

//USING THE CONCAT METHOD: used to concantenate two arrays
const numbers = customArr.concat(arr2);
console.log(numbers);
//the spread operator can also be used, instead of the concat method
console.log([...customArr, ...arr2]);

//LOOPING ARRAYS USING THE FOR EACH METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//taking the positive values as deposits, and the negative values as withdrawals
//Using the for of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //the Math.abs method is used to remove the negative sign in front of the value
  }
}

console.log("Using the for each method to achieve same thing above");

console.log("------FOREACH METHOD -----------");
movements.forEach(function (currentMovement) {
  if (currentMovement > 0) {
    console.log(`You deposited ${currentMovement}`);
  } else {
    console.log(`You withdrew ${Math.abs(currentMovement)}`); //the Math.abs method is used to remove the negative sign in front of the value
  }
});

console.log(
  "------TO ACESS THE CURRENT INDEX (POSITION) OF THE ARRAY USING THE FOR OF LOOP -----------",
);
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`); //the Math.abs method is used to remove the negative sign in front of the value
  }
}

console.log(
  "------TO ACESS THE CURRENT INDEX (POSITION) OF THE ARRAY USING THE FOREACH METHOD -----------",
);
movements.forEach(function (currentMovement, index, array) {
  if (currentMovement > 0) {
    console.log(`Position ${index + 1}: You deposited ${currentMovement}`);
  } else {
    console.log(
      `Position ${index + 1}: You withdrew ${Math.abs(currentMovement)}`,
    ); //the Math.abs method is used to remove the negative sign in front of the value
  }
});

//USING THE FOR EACH METHOD ON MAP AND SET
console.log("----FOREACH ON MAPS------");
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["GBA", "Pound Sterling"],
]);

currencies.forEach(function (key, value, map) {
  console.log(`${key}: ${value}`);
});

console.log("----FOREACH ON SETS------");
const uniqueValues = new Set([
  "United States",
  "United Kingdom",
  "London",
  "United States",
  "London",
  "India",
]);
console.log(uniqueValues);
uniqueValues.forEach(function (key, value, set) {
  console.log(`${key}: ${value}`);
});
