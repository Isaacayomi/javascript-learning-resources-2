"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2024-01-05T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2037-03-04T17:01:17.194Z",
    "2024-01-01T23:36:17.929Z",
    "2024-01-07T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const current = new Date();
    // const currentDay = `${date.getDate()}`.padStart(2, 0);
    // const currentMonth = `${date.getMonth() + 1}`.padStart(2, 0); //the get month method is zero based
    // const currentYear = date.getFullYear();
    // return `${currentDay}/${currentMonth}/${currentYear}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(acc.balance, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(acc.balance, acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(
    acc.balance,
    acc.locale,
    acc.currency,
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Countdown timer
const startLogoutTimer = function () {
  // Set time to 5 minutes
  let time = 120;
  // Call the timer every second
  const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Login to get started";
      containerApp.style.opacity = 0;
    }
    // Decrease the timer by 1 seconds
    time--;
  }, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers

let currentAccount, timer;
//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //Implementing date
    const current = new Date();
    //Experimenting API
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", //or numeric or 2-digit
      year: "numeric", //or 2-digit
      // weekday: "long", shows the week day (e.g friday, monday etc)
    };

    //formatting the date based on the user's locale
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options,
    ).format(current);

    // const currentDay = `${current.getDate()}`.padStart(2, 0);
    // const currentMonth = `${current.getMonth() + 1}`.padStart(2, 0); //the get month method is zero based
    // const currentYear = current.getFullYear();

    // const hour = `${current.getHours()}`.padStart(2, 0);
    // const min = `${current.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${currentDay}/${currentMonth}/${currentYear}. ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);

    timer = startLogoutTimer(); // Logout timer

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString);

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); //rounds down the value inputted if it has decimal (12.7) = 13

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //implementing the setTimeout function
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(25 === 25.0);

//converting strings to numbers
console.log(Number("23"));
console.log(+"23"); //makes code more cleaner

//Parsing
console.log(Number.parseInt("900px", 10)); //finds and returns the number. Adding the second arguement converts it to base 10
console.log(Number.parseInt("e24", 2)); //returns NaN. converts to base 2 due to the second argument added

console.log(Number.parseFloat("33.22px")); //reads and returns decimal numbers

console.log(Number.isNaN(+"20px"));

console.log(Number.isFinite(+"25")); //returns false if it is a string, and true if it is a number

///////////////// MATHS AND ROUNDING
console.log(Math.sqrt(25));
//or
console.log(25 ** (1 / 2)); //the square root
console.log(27 ** (1 / 3)); //the cubic root

console.log(Math.max(24, 5, 6, 7, 8, 900)); //returns the maximum value out of a list of values
console.log(Math.min(900, 400, -20, 0)); //returns the minimum value out of a list of values

//Using the mathematical PI method
console.log(Math.PI);
//calculating the area of a circle
console.log(Math.PI * Number.parseFloat("25") ** 2);

console.log(Math.random() * 6); //generates numbers between 0 and 6
console.log(Math.floor(Math.random() * 6)) + 1; //generates numbers from 0 to 6

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
console.log(randomInt(20, 50));

//Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.2));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.9));
console.log(Math.floor(23.9));

//Floating point numbers (decimals)
console.log((2.7).toFixed(0));

//The remainder operator (%)
console.log(5 % 2); //returns the remainder which is 1
console.log(8 % 3); //returns the remainder which is 2
console.log(8 / 3);

//checks whether a number is odd or even
const isEven = (num) => num % 2 === 0;

console.log(isEven(90));

//converts to a real array since it's a node list
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    } else {
      row.style.backgroundColor = "green";
    }
  });
});

//Working with Bigint
console.log(2 ** 53 - 1);

console.log(4888888888888888888888888889888888888912333333n);
console.log(BigInt(4888888888888888888888888889888888888912333333n));

//Create a date
const now = new Date(); //i
console.log(now);

console.log(new Date("Tue Feb 06 2024 08:54:41")); //ii: passing dates as strings
console.log(new Date(account1.movementsDates[0])); //iii

console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //converting from days to milliseconds

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //to get milliseconds

//to get the current time stamp
console.log(Date.now()); //gives the milliseconds
console.log(new Date(1707207007430)); //converting the above milliseconds to date

//Note: the above get method also has a set version, i.e setFullYear(), setMonth, setDate, etc...

//Operation with dates
//To calculate the number of days passed
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); //(1000 millisecons is one seconds, * 60 seconds, * 60 minutes * 24 hours) to get the number of days
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

//INTERNATIONALIZING NUMBERS
const options = {
  style: "unit",
  unit: "celsius",
};

const num = 2312234235.25;
console.log("US", new Intl.NumberFormat("en-US", options).format(num)); //formats numbers based on the country format
console.log(
  "GERMANY:       ",
  new Intl.NumberFormat("de-DE", options).format(num),
);

//TIMER: SETTIMEOUT & SET INTERVAL
//Set time out timer only runs once after a defined time while the set interval timer keeps running forever until we stop it
//setTimeout function
// console.log("in 3, 2, 1");
// setTimeout(() => console.log("Well done"), 3000);

/*
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  "olives",
  "spinach"
);

console.log("Waiting...");

  setTimeout(
    (boy, girl) => console.log(`${boy} is the boy and ${girl} is the girl`),
    4000,
    "Prime",
    "Mercy"
  ); */

/*
//Another way to use arguements with the settimeout function by using the spread operator
const ingredients = ["Olives", "Spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(
      `${ing1} and ${ing2} are the ingredients we need to cook the food`
    ),
  2000,
  ...ingredients
);

//to cancel the timeout until the delay has passed
if (ingredients.includes("spinach")) {
  clearTimeout(pizzaTimer);
}
*/

//creating a clock with the setInterval function
// setInterval(function () {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

// Practicing more on set intervals (counts from one to 100)
// let time = 0;

// const setInt = setInterval(() => {
//   time++;
//   console.log(time);
//   if (time === 100) {
//     clearInterval(setInt);
//   }
// }, 10);
