"use strict";

const restaurant = {
  names: "Classica Italiano",
  location: "Via Angela Tavanti",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "cake"],
  openingHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta, made with ${ing1}, ${ing2}, ${ing3}`,
    );
  },
};

//Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log("Monday " + restaurant.openingHours.mon.open);

//Withh optional chaining
console.log(restaurant.openingHours.mon?.open); //restaurant.openingHours.mon ? means to check if the property mon is actually a child of openingHours, and also a child of restaurant, if it is, add .open
// console.log("friday " + restaurant.openingHours.fri?.open);

const openingHours = {
  thu: {
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
// console.log("hours" + openingHours)
//Looping over property names (keys)
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
for (const day of properties) {
  console.log(day);
}

//Looping over the values
const values = Object.values(openingHours);
console.log(values);

//Looping over the entire objects
const entries = Object.entries(openingHours);
// console.log(entries)

for (const x of entries) {
  console.log(x);
}

//Short Circuiting (&& and ||)
//In the case of the OR operator, short circuiting returns the first truthy value
console.log(0 || 3);
console.log("" || "Jonas"); //Jonas
console.log(true || 1); //true
console.log(undefined || null); //null

//In the case of the AND operator, short circuiting returns the first falsy value
console.log(0 && 3);
console.log("Isaac" && "Prime");

//Using the nullish coalescing operator(??), works with the idea of nullish values alone(null & undefined), meaning if the first value is NULL or UNDEFINED (NOT 0 OR FALSE OR ANY OTHER THING), the second value will be returned
restaurant.numGuests = 12;
const guestCorrect = restaurant.numGuests ?? 15;
console.log(guestCorrect);
///////////////////////////////////////
// CODING CHALLENGE (1)

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

//Looping Arrays (The For_Of Loop)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("New challenge!!");
for (const item of menu) console.log(item);

console.log("Challenge Ends!!");

//Loops through the entire array
const friends = ["Prime", "Swift", "Atom"];
for (const list of friends) console.log(list);

//this provides each of the index of the array and the element itself, in an individual array
for (const list of friends.entries()) {
  console.log(list);
}

console.log(...friends.entries());

// console.log(friends)

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

//1.
const gameEntries = game.scored;
for (const [score, player] of gameEntries.entries()) {
  console.log(`Goal ${score + 1}: ${player}`);
}

//2.
let sum = 0;
let ave = 0;

let Values = Object.values(game.odds);
for (const value of Values) {
  console.log(value);
  sum += value;
}
console.log(sum);
ave = sum / Values.length;
console.log(ave);

//OR

// for (let i = 0; i < Value.length; i++) {
//     console.log(Value[i])
//     sum += Value[i]
// }
// console.log(sum)
// ave = sum/Value.length;
// console.log(ave)

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/////////////////////////////////
/* CODING CHALLENGE 1
1. Create one player array for each team (variables 'player1' and 'player2')
2.The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk) with the goalkeeper's name, and one array ('fieldPlayers) with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, bayern Munich (team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus Thiago, coutinho and Perisic.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: use players 'Davies', 'Muller', 'Lewandoski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

/*
//1
const [player1, player2] = game.players;

//2
let [gk, ...fieldPlayers] = player1;

// 3.
let allPlayers = [...player1, ...player2];

// 4.
let players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
let { team1, x: draw, team2 } = game.odds;

// 6.
const printGoals = function (...players) {
    console.log(`${ players.length } goals were scored`)
}

// printGoals('Davies', 'Muller', 'Lewandoski', 'Kimmich');
printGoals(...game.scored)

// 7.
team1 < team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win')
*/

/*
/////////////////////////////////////////////////////////
//Object destructuring
// const { names, categories, openingHours } = restaurant;
const { names: restaurantName, categories: tags, openingHours: hours } = restaurant;
console.log(restaurantName, tags, hours)

//Adding default values just in case the property does not exist
//give the property a variable name, and also a defulat value
const { starterMenu: starter = [], mainMenu: main = [], exist: exisst = [1] } = restaurant;
console.log(exisst)

//Mutating variables
let a = 111;
let b = 999;

let obj = { a: 23, b: 7, c: 14 };
(obj = { b, a })
console.log(a, b)

/////////////////////////////////////////////////////////////
//Spread Operator
const arr = [7, 8, 9]
//Creating a new array based on the above array with new eleements at the beginning (Manually)
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

//Using the spread operator
let spread = [1, 2, ...arr]
console.log(spread)


const newMenu = [...restaurant.mainMenu, 'Spring rolls'];
console.log(newMenu)

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]

//Join two or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

//iterables: arrays, strings, maps, sets, and not object
const str = 'Prime';
const letter = [...str]
console.log(letter)

*/
//Real world exammple
//Order Pasta
/*
const ingredients = [prompt('Let us make Pasta! Ingredient 1'), prompt('Let us make Pasta! Ingredient 2'), prompt('Let us make Pasta! Ingredient 3')]

// console.log(ingredients)

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
//Using the spread operator (the better solution)
restaurant.orderPasta(...ingredients)
*/

/*
/////////////////////////////////////////////////////////
//Destructuring 
//Using the spread operator on objects
const newRestaurant = { ...restaurant, founder: 'Isaac Ayomide', foundingYear: '2026' }
console.log(newRestaurant)

const restaurantCopy = { ...restaurant };
restaurant.names = "Isaac Ayomide";
console.log(restaurantCopy);
console.log(restaurant);

/////////////////////////////////////////////////////////////////
//REST PATTERNS AND PARAMETERS  
//Rest patterns (DESTRUCTURING)
const [position1, position2, ...others] = [1, 2, 3, 4, 5];
console.log(position1, position2, others);

const [pizza, , cake, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, cake, otherFood)

//Rest patterns on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays)

////////////////////////////////////////////////
//REST PATTERSN(FUNCTION)
const add = function (...numbers) {
    console.log(numbers)
}

add(2, 3)
add(2, 3, 5, 6)
add(2, 3, 5, 6)
add(2, 3, 5, 6, 9, 10, 22)
    * /


/*
////////////////////////////////////////
//Array Destructuring
const arr = [2, 3, 4]
const [x, y, z] = arr;
console.log(x, y, z)

const [first, second] = restaurant.categories; //Selects only the first and second value in the array
// console.log(first, second)

const [firstVal, , lastVal] = restaurant.categories; //Selects the first and third value in the array. To select the first,last and skip the second value, we simply leave a hole in the destructuring operator
// console.log(firstVal, lastVal)

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Swapping the values of 'main' and 'secondary'
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0))

//for the destructuring
//Receive 2 return vaues from a function
let [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

//Swapping the values for each other
[mainCourse, starter] = [starter, mainCourse]

//Using a nested array (Nested Destructuring)
const nested = [2, 3, [5, 6]]

//Destructuring the arrays
const [i, p, [j, k]] = nested;
console.log(i, p, j, k)

//Setting Default values
const [u = 1, q = 1, r = 1] = [8, 9];
console.log(u, q, r)
*/
