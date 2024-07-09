'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//USING THE FOREACH METHOD and SORTING THE MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' '; //Empty the movement container

  //SORTING THE MOVEMENTS
  const sortedMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  sortedMovements.forEach(function (mov, i) {
    //Remember, forEach loop actually accepts three arguements which are the current element of the array, the index and the entire array

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}
            </div>
          <div class="movements__value">${mov}€</div>
        </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account2.movements);

//USING THE MAP METHOD
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
  console.log(accs);
};
createUsernames(accounts);

//USING THE DISPLAY METHOD TO CALCULATE THE TOTAL BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, el) {
    return acc + el;
  }, 0);
  // acc.balance  =  balance;
  labelBalance.textContent = `${acc.balance} €`;
};

// console.log(calcDisplayBalance(account1.movements));

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(function (deposits) {
      return deposits > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(function (withdrawal) {
      return withdrawal < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = Math.abs(`${out}`);
  //interest is: 1.2% (0.012) of the deposited amount

  const interest = movements
    .filter(function (deposits) {
      return deposits > 0;
    })
    .map(function (currentDeposit) {
      return currentDeposit * acc.interestRate;
    })
    .filter(function (int, i, arr) {
      console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  console.log(interest);

  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

//EVENT HANDLERS (LOGIN FEATURE)
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //Prevents form from submitting(prevents it from auto reloading)
  // console.log('Login');

  currentAccount = accounts.find(function (acct) {
    return acct.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    //display UI and a welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }!`;

    //Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    inputLoginPin.blur(); //makes the input field lose focus after successful login
    containerApp.style.opacity = 100;

    //Update UI
    updateUI(currentAccount);
  }
});

//IMPLEMENTING TRANFER FEATURES
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //prevents code from auto reloading

  const amount = Number(inputTransferAmount.value);
  const receiverAcct = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  //the code below checks if the amount to be sent is greater than 0 and if the current account balance is greater or equal to the amount to be sent, and also check if the receiver account actually exists before sending to it, then lastly, checks if the receiver account username is not the same as the account receiving the money.
  if (
    amount > 0 &&
    receiverAcct && //checks if the receiver account exists
    currentAccount.balance >= amount &&
    receiverAcct?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcct.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  console.log(amount, receiverAcct);
});

//LOAN FEATURE USING THE SOME METHOD
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount / 10;
    })
  ) {
    //Add the movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);

    //Clear input field
    inputLoanAmount.value = '';
  }
});

//USING THE FINDINDEX METHOD
//DELETE ACCOUNT

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username;
    }); //finds the index of the found array (index to delete)
    // console.log(index)

    //DELETE ACCOUNT
    accounts.splice(index, 1);

    //HIDE UI
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
});

//SORT BUTTON
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

////////////// CODING CHALLENGE 1
//TEST DATA: Julia's data [9,16,6,8,3], Kate's data [10, 5, 6, 1, 4]

/*
const checkDogs = function(dogsJulia, dogsKate) {
const juliaShallowCopy = [...dogsJulia] //Creating a shallow copy of the original array
const juliaCopy = juliaShallowCopy.slice(0,-2);
juliaCopy.splice(0,1); //Removes the first element in the shallowcopy created and this changes the array

const correctedData = [...juliaCopy, ...dogsKate];

correctedData.forEach(function(dogAge, i) {

  const age = dogAge >= 3? "an adult" : "a puppy";
  
  console.log(`Dog number ${i + 1} is ${age} and it is ${dogAge} years old`);
})
}

checkDogs([9,16,6,8,3], [10, 5, 6, 1, 4]) */

//THE MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//USING THE FILTER METHOD
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);
console.log(movements);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

//USING THE REDUCE METHOD: we use the reduce method to basically boil down all the elements in an array into one single value

const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`iteration ${i}: ${acc} + ${curr}`);
  return acc + curr;
}, 0);
console.log(`Balance is ${balance}`);

const arrs = [300, 900, 500];
let tots = 0;

for (const el of arrs) {
  tots += el;
}
console.log(tots);

/*
const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
})
console.log(`${movementsUSD}`);
console.log(movements); */

//USING THE ARROW FUNCTION
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);
console.log(movements);

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements)
// console.log(movementsUSD)

////// CODING CHALLENGE 2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);

//   const average =
//     adults.reduce(function (acc, age) {
//       return acc + age;
//     }, 0) / adults.length;
//   console.log(average);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (age) {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   console.log(humanAge);

//   const adults = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   console.log(adults);

//   const average =
//     adults.reduce(function (acc, age) {
//       return acc + age;
//     }, 0) / adults.length;
//   console.log(average);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//CODING CHALLENGE 3 (rewriting the solution of the previous challenge using arrow function)
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// console.log(humanAge);
const ave1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(ave1);

//USING THE FIND METHOD: used to retrieve one element from an array based on a certain condition
const firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(firstWithdrawal); //returns the first element in the array that is greater than 0
console.log(accounts);

// //USING THE FOR OF LOOP METHOD AND THE FIND METHOD IN THE BANKIST PROJECT
// for (const acct of accounts) {
//   const owner = accounts.find(function (account) {
//     return account.owner === 'Sarah Smith';
//   });
//   console.log(owner);
// }

//SOME AND EVERY (ARRAY METHODS)
//THE SOME METHOD
console.log(movements);
console.log(movements.includes(-130));

const anyDeposit = movements.some(function (mov) {
  return mov >= 5000;
});
console.log(anyDeposit);

//THE EVERY METHOD (only returns true if all the element in the array satisfy the condition passed in)
console.log(
  account4.movements.every(function (mov) {
    return mov > 0;
  }),
);

//Separating callback functions to make code DRY
const depo = move => move > 0;
console.log(movements.every(depo));
console.log(movements);
console.log(movements.filter(depo));

//THE FLAT METHOD
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const newArr = arr.flat();
console.log(newArr);

const accountMovements = accounts.map(function (acc) {
  return acc.movements;
});
console.log(accountMovements);

const allMovements = accountMovements.flat();
const overallBalance = allMovements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(allMovements);
console.log(overallBalance);

//THE FLATMAP METHOD
const accountMovements2 = accounts.flatMap(function (acc) {
  return acc.movements;
});
console.log(accountMovements2);
const overallBalance2 = accountMovements2.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(accountMovements2);
console.log(overallBalance2);

//The sort method basically does its sorting on strings
//SORTING ARRAYS WITH STRINGS
const owners = ['Jonas', 'Prime', 'Adam', 'Martha'];
console.log(owners.sort());

//SORTING ARRAYS WITH NUMBERS
//Sorting in ascending order
movements.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(movements);

//Sorting in descending order
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(movements);

//MORE WAYS OF CREATING AND FILLING ARRAYS
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

//EMPTY ARRAYS + FILL METHODS
const x = new Array(7); //if only one value is passed in the array constuctor as arguement, it returns 7 empty arrays
console.log(x);
const y = x.fill(2);
console.log(y);
y.fill(12, 2, 4);
console.log(y);

const Arr = [1, 2, 3, 4, 5, 6];
Arr.fill(23, 4, 6);
console.log(Arr);

//Array.from
const z = Array.from({ length: 8 }, () => 12); //the second arguement of the .from method is a mapping method
console.log(z);

const zz = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(zz);

//Generating random dice rolls
const diceRolls = Array.from(
  { length: 100 },
  (_, i) => i + Math.floor(Math.random() * 6),
);
console.log(diceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
  );
  console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});

//FINAL TEST OF THIS SECTION

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

//TEST DATA
const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },

  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },

  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },

  {
    weight: 32,
    curFood: 340,
    owners: ['Micheal'],
  },
];

//Task 1
const recommendedFoodPortion = dogs.forEach(function (mov, i) {
  return (mov.recommendedFood = `${Math.trunc(mov.weight ** 0.75 * 28)}`);
});

//Task 2 (find method retrieve one element from the array based on a certain condition)
const sarahDog = dogs.find(function (dog) {
  return dog.owners.includes('Sarah');
});
if (sarahDog && sarahDog.curFood > Number(sarahDog.recommendedFood)) {
  console.log(`dog is eating too much`);
} else {
  console.log(`dog is eating too little`);
}

console.log(dogs);

//Task 3
const ownerEatTooMuch = dogs
  .filter(dog => dog.curFood > Number(dog.recommendedFood))
  .map(dog => dog.owners)
  .flat();

console.log(ownerEatTooMuch);

const ownerEatTooLittle = dogs
  .filter(dog => dog.curFood < Number(dog.recommendedFood)) //returns only dog that has their current food greater than the recommended food
  .map(dog => dog.owners) //loop through the result
  .flat(); //push the result into a single array
console.log(ownerEatTooLittle);

//Task 4
console.log(`${ownerEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownerEatTooLittle.join(' and ')} dogs eat too little`);

//Task 5 (using the some method, the some method allows us to test conditions and returns either true or false)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//Task 6
//current > (recommended * 0.9)
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//Task 7
console.log(dogs.filter(checkEatingOkay));

//Task 8 (sort in ascending order)
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
