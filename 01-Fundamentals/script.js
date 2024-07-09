/*const currentYear = 2023
const ageJonas = currentYear - 2003;
const ageSarah = currentYear - 2018
console.log(ageJonas, ageSarah)
console.log(ageJonas * 2, ageJonas)

//2**3 means 2 to the power of 3, which is equal to 2*2*2 which is 8

//concatenating the two strings
const firstName = "Isaac";
const lastName = 'Prime';
const post = 'Software Developer';

console.log(firstName + " " + lastName + ", The " + post);

console.log(ageSarah >= 18);
*/

//Coding challenge 1
/*
const markWeight = 70;
const markHeight = 1.6;
const markBMI = (markWeight / markHeight ** 2);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = (johnWeight / johnHeight** 2);

const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI)
*/

/*const firstName = 'Isaac';
const job = 'Software Developer';
const age = 20;

const Isaac = `I'm ${firstName}, a ${age} old developer. I am a ${job}`
console.log(Isaac)
console.log(`Isaac Prime is a ${job}`) */

// const birthYear = 1991;
// if (birthYear <= 2000) {
//      century = 20
// } else {
//      century = 21
// }

// console.log(century)

//Challenge 2
/*
const markWeight = 70;
const markHeight = 1.6;
const markBMI = (markWeight / markHeight ** 2);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = (johnWeight / johnHeight** 2);

if (markBMI > johnBMI) {-
    console.log(`Marks's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
}

const money = 100;

if (money) {
    console.log("Don't spend it all :)")
} else {
    console.log("You should get a job")
}

let height = 0;
if (height) {
console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED!');
}
*/

/*const age = "18";

if (age == 18) {
    console.log("Loose Equality Operator")
} else {
    console.log('Strict equality operator')
}

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23 || favourite === 7) {
    console.log(`${favourite} is a cool number`)
} else {
    console.log(`${favourite} is not a cool number`)
}

if (favourite!==23) {
    console.log('Why not 23?')
} */

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is eligible to drive')
} else {
    console.log('Someone else should drive...')
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is eligible to drive the car')
} else {
    console.log('Sarah is not eligible to drive, let someone else drive the car')
} */

//CODING CHALLENGE 3
/*
const gameOneDolphins = 96;
const gameTwoDolphins = 108;
const gameThreeDolphins = 89;
const dolphinsFinalPoint = (gameOneDolphins + gameTwoDolphins + gameThreeDolphins) / 3;
console.log(dolphinsFinalPoint)

const gameOneKoalas = 88;
const gameTwoKoalas = 91;
const gameThreeKoalas = 110;
const koalasFinalPoint = (gameOneKoalas + gameTwoKoalas + gameThreeKoalas) / 3;
console.log(koalasFinalPoint);

if (dolphinsFinalPoint > koalasFinalPoint) {
    console.log(`Dolphins team is the winner ${dolphinsFinalPoint}`)
} else if (koalasFinalPoint > dolphinsFinalPoint){
    console.log(`Koalas team is the winner ${koalasFinalPoint}`)
} else if (koalasFinalPoint === dolphinsFinalPoint || dolphinsFinalPoint === koalasFinalPoint) {
    console.log("It's a tie")
} else {
    console.log("No Team won the trophy")
}
*/
//CODING CHALLENGE 3 (BONUS )

/*
const minScore = 100;
const gameOneDolphins = 97;
const gameTwoDolphins = 11;
const gameThreeDolphins = 1;
const dolphinsFinalPoint = (gameOneDolphins + gameTwoDolphins + gameThreeDolphins) / 3;
console.log(dolphinsFinalPoint)

const gameOneKoalas = 10;
const gameTwoKoalas = 95;
const gameThreeKoalas = 106;
const koalasFinalPoint = (gameOneKoalas + gameTwoKoalas + gameThreeKoalas) / 3;
console.log(koalasFinalPoint);

if (dolphinsFinalPoint > koalasFinalPoint && dolphinsFinalPoint >= minScore) {
    console.log(`Dolphins team is the winner ${dolphinsFinalPoint}`)
} else if (koalasFinalPoint > dolphinsFinalPoint && koalasFinalPoint >= minScore) {
    console.log(`Koalas team is the winner ${koalasFinalPoint}`)
} else if (dolphinsFinalPoint === koalasFinalPoint && dolphinsFinalPoint >= 100 || koalasFinalPoint === dolphinsFinalPoint && koalasFinalPoint >= 100) {
    console.log("Tie")
} else {
    console.log('No team wins the trophy')
}
*/

/*
const day = "Monday";

switch (day) {
    case 'Monday': //if day === 'Monday', then it'll execute the below console.logs
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos')
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videoes');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend')
        break;
        default :
        console.log('Not a valid day')
}
*/

/*
const day = "Monday";

if (day === "Monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === "Tuesday") {
    console.log('Prepare theory videos');
} else if (day === "Wednesday" || day === "Thursday") {
    console.log('Write code examples');
} else if (day === "Friday") {
    console.log('Record videos')
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend")
} else {
    console.log('Not a valid day')
} */

/*
const age = 23;

age>= 18? console.log('I like to drink wine') : console.log("I don't like to drink wine"); */

// CODING CHALLENGE 4
/*
const billValue = 43;
let tip;
let totalBill;

billValue >= 50 && billValue <= 300 ?
    tip = 0.15 * billValue : tip = 0.20 * billValue;
totalBill = billValue + tip;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${totalBill}`);
*/
