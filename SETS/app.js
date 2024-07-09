"use strict";

const friendsSet = new Set(["Prime", 12, true]);
console.log(friendsSet);

//Getting the size of a set
console.log(friendsSet.size);

//Check if a certain element is in a set
console.log(friendsSet.has("Prime"));

//Add new element to the set
console.log(friendsSet.add("Atom"));

//Delete an element from the set
console.log(friendsSet.delete(12));
console.log(friendsSet);

//Example
const staffs = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const uniqueStaff = new Set(staffs);

//Converting sets to array
const uniqueStaff = [...new Set(staffs)];
console.log(uniqueStaff);

console.log(new Set("Isaac").size);

////////////////////////
//  MAPS (New javaScript data structure) : is a data structure used to map values to keys, just like objects
const rest = new Map();
//Adding Values to a map (Method 1)
rest
  .set("name", "Prime")
  .set("age", 20)
  .set("Stack", "Frontend")
  .set("Height", 5.8)
  .set(true, "We are open :D")
  .set(false, "We are closed :(")
  .set("open", 11)
  .set("close", 23);
console.log(rest);

//Reading data from a map, we use the GET method (Method 2)
console.log(rest.get("Stack"));

const time = 21;
//Using a conditional statement with map get method
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//Checking if a map has a particular key
console.log(rest.has("Height"));

//Deleting a value from a map
rest.delete(false);
console.log(rest);

//Checking the size
console.log(rest.size);

//Removing all the elements
// rest.clear()

//Using arrays as map keys
rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])) //Returns undefined

//to get values from an object key
const arr = [2, 3];
rest.set(arr, "Test2");
console.log(rest.get(arr));

//MAPS ITERATION
//Another method of creating maps without using the set method
const question = new Map([
  ["Question:", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

//Iteration, Using a for loop
console.log(question.get("Question:"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;
// const answer = Number(prompt('You answer'));
console.log("Your answer: " + answer);
console.log("Your answer:" + question.get(answer));
console.log(
  question.get("correct") === answer ? question.get(true) : question.get(false),
);

console.log(...question);

//CODING CHALLENGE 3
/* 
Let's continute with our football betting app! This time, we have a map with a log of the events that happended during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time)

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair, so remove this event frmo the game events log.
3. Print the following string to the console: "An event happend, an average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF]  17: GOAL

*/
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);

// console.log([...new Set(gameEvents)]) //convert maps to arrays

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `An event happend, an average, every ${90 / gameEvents.size} minutes`,
);

//4.
for (const [key, event] of gameEvents) {
  const decide =
    key <= 45
      ? `[FIRST HALF] ${key}: ${event}`
      : `[SECOND HALF] ${key}: ${event}`;
  console.log(decide);
}
