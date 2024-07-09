"use strict";

/*function logger() {
    console.log('My name is Isaac Prime')
}
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
     return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 9);
console.log(orangeJuice)
*/

//A function to calculate an age based on a given birth day
//FUNCTION DECLARATION
/*function calcAge(birthYear) {
    return 2023 - birthYear;
}
const age = calcAge(2003);

//FUNCTION EXPRESSION
const Calcage2 = function (birthYear) {
    return 2023 - birthYear
}
const age2 = Calcage2(2003);
console.log(age, age2);

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    return `Juice with ${apples} apples and ${oranges} oranges`;
}

//ARROW FUNCTION
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);
*/

/*const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65;
    const yearsLeft = retirementAge - age
    if (age === retirementAge || age > retirementAge) {
        console.log(`Mr ${firstName} can now retire`)
    } else if (age < retirementAge) {
        console.log(`Mr ${firstName} is ${age} years old. You still have ${yearsLeft} years left before retiring`)
    }
    return yearsLeft;
};
console.log(yearsUntilRetirement(1991, 'Prime'))
console.log(yearsUntilRetirement(1980, 'Ayomide')) */
/*
function cutFruitPieces(fruit) {
    return  fruit * 4
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
     return juice;
}

console.log(fruitProcessor(2, 3))
*/
/*
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(2003)
    const retirementAge = 65;
    const yearsLeft = retirementAge - age
    if (age === retirementAge || age > retirementAge) {
        console.log(`Mr ${firstName} can now retire`)
    } else if (age < retirementAge) {
        console.log(`Mr ${firstName} is ${age} years old. You still have ${yearsLeft} years left before retiring`)
    }
    return yearsLeft;
};
console.log(yearsUntilRetirement(1991, 'Prime'))
console.log(yearsUntilRetirement(1980, 'Ayomide'))
*/

//CODING CHALLENGE 1
/*
const calcAverage = (score1, score2,score3) => (score1+score2+score3)/3;

let dolphinsTeam = calcAverage(44, 23, 71)
let koalaTeam = calcAverage(65, 54, 49)
console.log(dolphinsTeam, koalaTeam);

function checkWinner(teamDolphins, teamKoalas) {
    if (teamDolphins >= teamKoalas * 2) {
        console.log(`Koalas win (${teamKoalas} vs ${teamDolphins})`)
    } else if (teamKoalas >= teamDolphins * 2 ) {
        console.log(`Dolphins win (${teamDolphins} vs ${teamKoalas})`)
    } else {
        console.log('No team wins...')
    }
}
checkWinner(dolphinsTeam, koalaTeam)

dolphinsTeam = calcAverage(85, 54, 41);
koalaTeam = calcAverage(23, 34, 27);
checkWinner(dolphinsTeam, koalaTeam)
*/

//INTRODUCTION TO ARRAYS
/*
const myFriends = ['Micheal', 'Peter', 'Prime'];
console.log(myFriends)

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[1], years[2])
console.log(years.length);
console.log(myFriends[myFriends.length - 1]);
*/

//Exercise
/*
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])
console.log(age1, age2, age3);

years[0] = age1;
years[1] = age2;
years[years.length-1] = age3;
console.log(years)
*/

//ARRAY METHODS
// Using the push method (Adds element to the end of the array)
/*
const myFriends = ['Micheal', 'Pete'];
const newLength = myFriends.push('Super', 'Isaac')
console.log(myFriends, myFriends.length, newLength)

//Using the unshift method (Adds element to the begining of the array)
console.log(myFriends.unshift('Prime is gradually becoming a super frontend dev'))

//Using the pop method (Removes the last element of the array)
console.log(myFriends.pop())
console.log(myFriends.pop())
console.log(myFriends.push('Super Prime'))

console.log(myFriends.indexOf('Super Prime'))
console.log(myFriends.includes('Super Prime'))

if (myFriends.includes('Peter')) {
    console.log('You have a friend called Peter')
} else {
    console.log('You do not have a friend called Peter')
}
if (myFriends.includes('Stephen')) {
    console.log('You have a friend called Stephen')
} else {
    console.log('You do not have a friend called Stephen')
}
*/

//PRACTICE
/*
const fewNames = new Array('Prime', 'Isaac', 'Nife', 'Coding');
console.log(fewNames);
 const newfirstName = fewNames[3];
 const newSecondName = fewNames[2];
 const newThirdName = fewNames[1];
 const newFourthName = fewNames[0];

 fewNames[0] = newfirstName;
 fewNames[1] = newSecondName;
 fewNames[2] = newThirdName;
 fewNames[3] = newFourthName;
 console.log(fewNames);
 */

//CODING CHALLENGE 2
/*
const calcTips = function (bill) {

    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.20;
        return tip;
    }
}

const bills = new Array(125, 555, 44);
const tips = new Array(calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2]));
console.log(tips);

const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBills) */

//INTRODUCTION TO OBJECTS
/*const jonas = {
    firstName: 'JONAS',
    lastName: 'Prime',
    age: 2003 - 1993,
    job: 'Web Dev',
    friends: ['Micheal', 'Isaac', 'Bola']
};

jonas['future location'] = 'United Kingdom';


// console.log(jonas);
// console.log('His name is ' + jonas['firstName']);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, future location and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request!. Choose between firstName, lastName, age, job, future location and friends')
// } 

//CHALLENGE
// Jonas has 3 friends, and his best friend is called Micheal
const sentence = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(sentence)
*/

//OBJECT METHODS
// const jonas = {
//     firstName: 'JONAS',
//     lastName: 'Prime',
//     birthYear: 1991,
//     job: 'Web Dev',
//     friends: ['Micheal', 'Isaac', 'Jane'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         return 2037 - this.birthYear
//     }
// };
// console.log(jonas.calcAge())

// console.log(jonas.calcAge(jonas['birthYear']), jonas.calcAge(1991))

// const jonas = {
//     firstName: 'JONAS',
//     lastName: 'Prime',
//     birthYear: 2003,
//     job: 'Web Dev',
//     friends: ['Micheal', 'Isaac', 'Jane'],
//     hasDriversLicense: true,

//     // calcAge: function () {
//     //     return 2023 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };
// jonas.calcAge()

// console.log(jonas.age)

/*const jonas = {
    firstName: 'JONAS',
    lastName: 'Prime',
    birthYear: 2000,
    job: 'Web Dev',
    friends: ['Micheal', 'Isaac', 'Jane'],
    hasDriversLicense: true,

    calcAge: function () {
        return 2023 - this.birthYear;
    },

    summary: function () {
        const sentence = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
        return sentence;
    }
};

console.log(jonas.summary())

//challenge
//Jonas is a 46 year old teacher, and he has a driver's license */

//CODING CHALLENGE 2
// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };
// Mark.calcBMI();

// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };
// John.calcBMI();

//Using the Tenary Operation

// Mark.calcBMI() > John.calcBMI() ? console.log(` ${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI})`) : console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI})`);

// if (Mark.calcBMI() > John.calcBMI()) {
//     console.log(`${Mark.fullName}'s BMI ${Mark.calcBMI()} is higher than ${John.fullName}'s BMI ${John.calcBMI()} `)
// } else {
//     console.log(`${John.fullName}'s BMI ${John.calcBMI()} is higher than ${Mark.fullName}'s BMI ${Mark.calcBMI()} `)
// }

//ITERATION: THE FOR LOOP (for loops keeps running while condition is TRUE)
/*for (let repNum = 5; repNum <= 10; repNum++) {
    console.log(`Lifing weight repetition ${repNum}`);
}

//LOOPING ARRAYS, BREAKING AND CONTINUING
const jonasArray = [
    'Jonas',
    'Prime',
    2023 - 1991,
    'teacher',
    ['Michea', 'Peter', 'Steven'],
    true,
    'Prime is gradually becoming a badass developer',
    'He is also a badass typist'
];

const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);

    //Filling types array
    types.push(typeof (jonasArray[i]));
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
}
console.log(ages)

//continue and break statement
//The continue statement is used to exit the current iteration of the loop and continue to the next iteration
console.log('-----ONLY STRING -----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i]);
}

//Break statement is used to completely terminate the whole of the loop
console.log('-----BREAK WITH NUMBER -----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        break;
    }

    console.log(jonasArray[i]);

} */

//LOOPING BACKWARDS AND LOOP IN LOOP
/*const jonas = [
    'Prime',
    'Swift',
    'Mhife'
];
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

//CREATING LOOP INSIDE A LOOP
for (let i = 1; i <= 3; i++) {
    console.log(`--------Starting Exercise ${i}`);

    for (let j = 1; j <=3; j++) {
        console.log(`Exercise ${i}: Lifting weight ${j}`);
    }
    
} */

//THE WHILE LOOP
// let rep = 0;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`)
//     rep++
// }

// //EXAMPLE
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {

//     console.log(`You rolled a ${dice}`);
//     Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end....')
// }

//FINAL CODING CHALLENGE FOR JAVASCRIPT FUNDAMENTALS

/*const calcTips = function (bill) {

    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.20;
        return tip;
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTips(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals); 

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals))
console.log(calcAverage(tips))

*/

const measureKelvin = function () {
  const measurement = {
    type: "tempe",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };
  console.log10(measurement);
  const kelvin = measurement.value + 274;
  return kelvin;
};
console.log(measureKelvin());
