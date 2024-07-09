const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

//STRING METHODS

console.log(airline.indexOf("r")); //To get the first occurrence of the letter r (Returns the position in number)
console.log(airline.lastIndexOf("r")); //To get the last occurrence of the letter r (Returns the position in number)
console.log(airline.indexOf("Portugal"));

//Working with the slice method
console.log(airline.slice(4));

const vehicle = "Airplane";
console.log(vehicle.slice(0, 8));

//Practice
//write a function to check if a seat in the plane is the middle seat
const checkMiddleSeat = function (seat) {
  //Note: B and E are the middle seats
  const s = seat.slice(-1); //Gets the last letter of the first occurence
  if (s === "B" || s === "E") {
    console.log("You got the Middle Seat");
  } else {
    console.log("You got Lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//Fix capitalization in a name
const passenger = "pRime";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalization = function (Name) {
  const passengerName = Name;
  const toLower = passengerName.toLowerCase();
  // console.log(toLower)
  const correctName = toLower[0].toUpperCase() + toLower.slice(1);
  console.log(correctName);
};
fixCapitalization("isaac");
fixCapitalization("aYomIde");
fixCapitalization("okunlolA");

//Comparing Emails
const email = " hello@jonas.io";
console.log(email);
const trimmed = email.trim();
console.log(trimmed);

//Replacing parts  of a string
const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

//Replacing all texts that looks the same with another value
const announcement = `All passengers, come to boarding door 23. Boarding door 23!`;
// const replaced = announcement.replaceAll('door', 'gate')
// console.log(replaced)

//Using a very simple regular expression to replace all texts that are the same with another value
const replaced = announcement.replaceAll(/door/g, "gate");
console.log(replaced);

//Booleans
const airPlane = "A320neo";
console.log(airPlane.includes("A320")); //Returns true or false
console.log(airPlane.startsWith("Air"));
console.log(airPlane.endsWith("Air"));

//PRACTICE
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed onboard");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//USING THE SPLIT METHOD
console.log("Isaac Prime".split(" ")); //splits them into an array

const [firstName, lastName] = "Isaac Prime".split(" "); //Splits it into an array

//USING THE JOIN METHOD
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" "); //splits them into an array
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    const converted = n[0].toUpperCase() + n.slice(1);
    // console.log(converted)
    namesUpper.push(converted);
  }
  // console.log(namesUpper) //Displays the name in an array
  console.log(namesUpper.join(" ")); //Removes it from the array
};

capitalizeName("jessica ann smith davis");
capitalizeName("isaac prime");

//PADDING A STRING
const message = "Prime is gradually becoming a frontend software engineer";
console.log(message.padStart(59, "Big ").padEnd(65, "LFG")); //Adding to the beginning and end of a string
console.log(message.length);

const maskCreditCard = function (number) {
  const numString = String(number);
  const lastDigit = numString.slice(-4);
  console.log(lastDigit.padStart(numString.length, "*"));
};

maskCreditCard(4833945834883);
maskCreditCard("234975040545");

//REPEAT METHOD (To repeat same string multiple times)
const message2 = "Bad weather.... All departures delayed.... ";
console.log(message2.repeat(3));

//CODING CHALLENGE
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const toCamelCase = function (names) {
  const underscore_case = names;
  const toLowerCase = underscore_case.toLowerCase();
  const replaced = toLowerCase.replace("_", " ");
  const [lower, upper] = replaced.split(" ");
  const upperCase = upper[0].toUpperCase();
  const converted = lower + upperCase + upper.slice(1);
  console.log(converted);
};

toCamelCase("underscore_case");
toCamelCase("first_name");
toCamelCase("Some_Variable");
toCamelCase("calculate_AGE");
toCamelCase("delayed_departure");
