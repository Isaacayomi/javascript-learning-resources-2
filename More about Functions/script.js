"use strict";
//DEFAULT PARAMETERS
const bookings = [];
const createBooking = function (
  flightNum = "LH235",
  numPassengers = 4,
  price = 300 * numPassengers,
) {
  /* ES5 way of doing stuff
    numPassengers = numPassengers || 1 //Default value. Once the numPassengers is a falsy value, the result will be the value of the second operand
    price = price || 199;
    numPassengers = 1
*/
};

/*
const booking = {
flightNum,
numPassengers,
price
}
console.log(booking);
bookings.push(booking);
}
 
createBooking('LH123');
createBooking('BE455', 2)
 
//HOW PASSING ARGUMENTS WORKS
const flight = 'LH235'
const prime = {
name: 'Isaac Ayomide',
passport: 24234234234232
}
 
const checkIn = function (flightNum, passenger) {
flightNum = 'LH999';
passenger.name = 'Mr. ' + passenger.name;
 
if (passenger.passport === 24234234234232) {
alert('Checked in')
} else {
alert('Wrong passport!')
}
}
checkIn(flight, prime);
console.log(flight)
console.log(prime)
 
const newPassport = function (person) {
person.passport = Math.trunc(Math.random() * 100000);
}
newPassport(prime)
 
checkIn(flight, prime)
*/

//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

//a generic function that replaces all the spaces in a word, and then converts it to lowercase
/*
const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
}
 
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' '); //Adding the .join(' ') removes the comma in between the letters and adds an empty spacce
}
 
//HIGHER ORDER FUNCTION (takes in a function [fn])
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`) //displays the name of the function that transformed the string
}
 
transformer('JavaScript is the best!', upperFirstWord);
console.log('///')
transformer('JavaScript is the best!', oneWord);
 
 
//JS uses callbacks all the time
const high5 = function () {
    console.log('hii');
}
 
// document.body.addEventListener('click', high5) //logs 'hii' to the console whenever you click on the body
 
 
 
/*
converts the first word to uppercase
const str = 'isaac Prime'
const [first, ...others] = str.split(' ');
console.log([first[0].toUpperCase() + first.slice(1), ...others]) */

//FUNCTIONS RETURNING FUNCTIONS
/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}
const greetings = greet('Hii')
greetings('Prime')
greetings('Isaac')
//or
greet('Hi')('Ayomide')
*/
//Rewriting the above function using arrow function (CHALLENGE)
//Note: arrow functions doesn't basically need the curly braces and a return statement if it's just a single line of code
/*
const greet = greeting => {
    return name => {
        console.log(`${greeting} ${name}`)
    }
}
const greetings = greet('Hi')
greetings('Isaac')
 
//THE CALL AND APPLY METHODS
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ Flight: `${this.iataCode}${flightNum}`, name })
    },
};
console.log(lufthansa)
 
lufthansa.book(239, 'Isaac')
lufthansa.book(635, 'Ayomide Prime')
 
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
 
const book = lufthansa.book;
 
// book(23, 'Isaac Ayomide')
 
//Manipulating the this keyword using the CALL METHOD
book.call(eurowings, 239, 'Sarah Williams')
console.log(eurowings)
 
book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)
 
const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: []
}
 
book.call(swiss, 494, 'Isaac Ayomide')
console.log(swiss)
 
//using the APPLY METHOD (no longer valid in modern javascript)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss)
 
//Using the BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa)
bookEW(23, 'Steven Williams');
bookLH(290, 'Isaac Ayomide')
*/

//CODING CHALLENGE 1

//CHALLENGE #1
/* 
Let's build a simple poll app!
 
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
 
Here are your tasks:
 
1. Create a method called 'registernewAnswer' on the 'poll' object. The method does 2 things: 
1.1 Display a prompt widonw for the user to input the number of the selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    
 
1.2 Based on the input number, update the answer array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenver the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'input'). which can be either 'string' or 'array'. If the type is 'array', simply display the results array as it is, using console.log(). This shoul dbe the default option. If type is 'string', display a string like 'Poll results are 12, 2, 3, 1'.
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
 
HINT: use many of the tools you learned about in this and the last section
 
BONUS: use the 'displayResults' method to display the 2 arrays in the test data. use both the 'array' and the 'string' option. Do not put the arrays in the poll object, so what should the this keyword look like in this situation?
 
BONUS TEST DATA 1: (5, 2, 3)
BONUS TEST DATA 2: (1, 5, 3, 9, 6, 1)
*/

//Using the bind method
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    //This generates [0,0,0,0]. More in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question} \n ${this.options.join(`\n`)} \n (Write option number)`));
        // console.log(question)
        typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
 
        console.log(this.answers)
    },
}
 
document.querySelector('.btn').addEventListener('click', poll.registerNewAnswer.bind(poll))
   */

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(function () {
  console.log("this will never run again");
})();

//Using the IIFE with an arrow function
(() => console.log("This will run just once!"))();

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//CLOSURES EXAMPLES
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();

//EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
