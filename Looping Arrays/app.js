"use strict";

const openingHours = {
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //Open 24 hours
    close: 24,
  },
};
console.log();

const restaurant = {
  names: "Classica Italiano",
  location: "Via Angela Tavanti",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "cake"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 Enhanced Object Literal, instead of writing the object property then the object variable to add, we can just do this:
  openingHours,

  //ES6 enhanced way of writing method
  /* orderPasta(img1, img2, img3) {
         console.log()
     } */
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta, made with ${ing1}, ${ing2}, ${ing3}`,
    );
  },
};

const greet = document.querySelectorAll(".hi");

for (const perOne of greet) {
  console.log(perOne);
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/*Looping over the array with a regular for loop
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
} */

//Looping over the array using a for of loop
for (const item of menu) {
  console.log(item);
}

//Using the for of loop to get the index (using the entries method)
for (const items of menu.entries()) {
  console.log(`${items[0] + 1}: ${items[1]}`);
}

//Using the Destructuring method to create a nice menu, starting from one
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}`);
}

//Using Optional Chaining (If a certain property does not exist, then undefined is returned immediately)

console.log(restaurant.openingHours.mon?.open); //meaning if restaurant.openingHours.mon exist, then the open property will be read, else undefined will be returned.

//Optional chaining example
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "Closed"; //Meaning if the openingHours for that day does not exist, instead of returning undefined, we just return the string CLOSED, and the nullish coalescing operator was used because saturday is 0, and instead of returning closed for saturday also, we used the coalescing operator which returns the second value if the first value is null or undefined value
  console.log(`on ${day}, we open at ${open}`);
}

//Optional chaining on Methods (To check if a method exist before calling it)
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

//Optional chaining on Arrays
const user = [{ name: "Prime", stack: "Frontend" }];

console.log(user[0]?.name ?? "Does not exist");

//LOOPING OBJECTS
//Looping over property names (keys)
const properties = Object.keys(openingHours);
let str = `We are open on ${properties.length} days: `;
for (const day of properties) {
  str += `${day} `;
}
console.log(str);

//Looping over the property(values)
const Values = Object.values(openingHours);
console.log(Values);

//Looping over the entire object, both the property name and its value
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
//CODING CHALLENGE 2 DATAS
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "weigl",
      "Weitsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
let scored = game.scored;
for (const [index, scorers] of scored.entries()) {
  console.log(`Goal ${index + 1}: scorers`);
}

//2.
const oddVal = Object.values(game.odds);
let sum = 0;
let ave = 0;
for (let i = 0; i < oddVal.length; i++) {
  sum += oddVal[i];
}
console.log((ave = sum / oddVal.length));
//3.
let teamOdd = Object.entries(game.odds);
for (const [team, odd] of teamOdd) {
  const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//CODING CHALLENGE 2
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:   Odd of Victory Bayern Munich: 1.33, Odd of draw: 3.25, Odd of victury Borrusioa Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names
//BONUS: Create an object called 'Scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//  Gnarby: 1,
//Hummels:1,
//Lewandowski: 2
//}
