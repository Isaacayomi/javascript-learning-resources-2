"use strict";

// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
// Arrow functions does not work for constructor functions
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function (Bad Practice)
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// The above constructor function now acts as the blueprint of a house, and with the blueprint set, other houses can be created based on the existing blueprint. Just like the new objects (matilda and jack) created below.

const Isaac = new Person("Isaac", 2003); // The actual house created (constructor function)
console.log(Isaac);

// 1. New empty object () is created
// 2. function is called, this = {}
// 3. { } linked to a prototype
// 4. function automatically returns that empty object from the beginning

// Instances created from the above class Person.
const matilda = new Person("Maltida", 2017);
// const jack = new Person("Jack", 2019);
// const prime = new Person("Prime", 1990);
// console.log(prime);
// console.log(matilda);
// console.log(jack);

//test whether an object is an instance of a particular class, returns true or false
// console.log(matilda instanceof Person)

// PROTOTYPES.
// Each and every function in javascript automatically has a property called prototype, and that includes constructor functions. Instead of adding methods directly in to the constructor function, we use prototypes.
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
matilda.calcAge();

//two ways to check if an object is tbe prototype of a particular constructor
// console.log(Isaac.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Isaac));

// we can also set properties on prototypes.
Person.prototype.gender = "Male";
console.log(Isaac, matilda);

// Prototype chains on built in objects like arrays
const arr = [3, 4, 5, 6, 7, 9];
// console.log(arr.__proto__ === Array.prototype);

//Adding a new method to the prototype property of the array constructor
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//Coding challenge 1
// const Car = function (make, speed) {
//   this.make = make
//   this.speed = speed
// }
// Car.prototype.accelerate = function () {
//   this.speed += 10
//   console.log(`${this.make} is going at ${this.speed} km/hr`)
// }

// Car.prototype.brake = function () {
//   this.speed -= 5
//   console.log(`${this.make} is going at ${this.speed} km/hr`)
// }
// const  BMW = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)
// console.log(BMW, mercedes)
// BMW.accelerate()
// BMW.brake()

// mercedes.accelerate()
// mercedes.brake()

// ES6 CLASSES
// creating a constructor function using CLASSES
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }
// }
// const jessica = new PersonCl("Jessica", 1990);
// console.log(jessica);
// jessica.calcAge();
// jessica.greet();

// Setters and Getters
// Using the getter property to get the last value in an Array
const account = {
  name: "Jonas",
  movements: [20, 40, 90, 100, 230],

  get lastMove() {
    return this.movements.slice(-1).pop();
  },
};
console.log(account.lastMove);

// using tbe Setters
const account2 = {
  name: "Prime",
  movements: [20, 30, 90, 100, 450],
  set lastMove(move) {
    this.movements.push(move);
  },
};
account2.lastMove = 1020;
console.log(account2.movements);

//Object.create method
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const stephen = Object.create(PersonProto);
stephen.name = "Stephen";
stephen.birthYear = 2003;

stephen.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1990);

//Coding challenge 2
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }

//   get speedUs() {
//     return `${this.make} is going at ${(this.speed /= 1.6)} mi/hr`;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const BMW = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
// console.log(BMW, mercedes);
// BMW.accelerate();
// BMW.brake();

// const ford = new Car("Ford", 120);
// console.log(ford.speedUs);

// ford.speedUs = 75;
// console.log(ford);

// mercedes.accelerate();
// mercedes.brake();


// Inheritance between classes: constructor function
const Personn = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Personn.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
// Child Constructor
const Student = function (firstName, birthYear, course) {
  Personn.call(this, firstName, birthYear);
  this.course = course
}

// Linking parent prototype with the child prototype
Student.prototype = Object.create(Personn.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const mike = new Student ("Mike", 2002, 'Computer Sciencce')
console.log(mike)
mike.introduce()
mike.calcAge()

// Coding challenge 3
// const Carr = function (make, speed) {
//   this.make = make
// this.speed = speed
// }
 
// const EV = function (make, speed, charge) {
//   Carr.call(this, make, speed);
//   this.charge = `${charge}`
// }
 
// Link the prototypes
/*
 EV.prototype = Object.create(Carr.prototype)
 
 EV.prototype.chargeBattery = function(chargeTo){
   this.charge = chargeTo
console.log(this.charge)
 }
 
 EV.prototype.accelerate = function () {
   this.speed += 20
   this.charge--
  console.log(`${this.make} going at ${this.speed} km/hr with a charge of ${this.charge}%`)
}
*/

// const tesla = new EV ("Tesla",120,90)
// console.log (tesla)
// tesla.accelerate()
// tesla.accelerate()
// tesla.chargeBattery(22)
// console.log(tesla)

// Inheritance between classes: ES6 classes
class PersonCll {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }
}

class Studentcl extends PersonCll {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear) //parent constructor arguments
    this.course = course
  }
  
  introduce() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`)
  }
}

const alex = new Studentcl("Alex", 2012, "Computer Science")
console.log(alex)
alex.introduce()
alex.calcAge()

// Inheritance between classes: Object.create
const Personproto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
  
  init(firstName,  birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const Studentproto = Object.create(Personproto)
Studentproto.init = function (firstName, birthYear, course) {
  Personproto.init.call(this, firstName, birthYear)
  this.course = course
}

const jay = Object.create(Studentproto)
jay.init('Joseph', 2010, 'Computer Science')
console.log(jay)
jay.calcAge()

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
// Final coding challenge
class CarrCl {
  constructor (make, speed) {
    this.make = make
this.speed = speed
  }
  
  
}

class EVCL extends CarrCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }
  
  accelerate() {
    this.speed += 20
   this.#charge--
  console.log(`${this.make} going at ${this.speed} km/hr with a charge of ${this.#charge}%`)
  }
  
  chargeBattery(chargeTo) {
    this.#charge = chargeTo
console.log(this.charge)
  }
}
   const rivian = new EVCL('Rivian', 120, 23)
rivian.accelerate()
console.log(rivian)