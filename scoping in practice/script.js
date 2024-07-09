"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // return output
  }
  printAge();

  return age;
}

const firstName = "Isaac";
calcAge(1991);

//The THIS keyword

console.log(this);
const calc_Age = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calc_Age(2003);

const calc_age = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calc_age(2003);

const prime = {
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(this.year - 1990);
  },
};
prime.calcAge();

const matilda = {
  year: 2017,
};

const f = prime.calcAge;

let lastName = "Prime";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastname: "Prime",
  age: 27,
};

const marriedJessica = jessica;
console.log(marriedJessica);
marriedJessica.lastname = "Davis";
console.log("Before marriage", jessica);
console.log("Before marriage2", marriedJessica);
