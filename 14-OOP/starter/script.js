'use strict';

// CONSTRUCTOR FUNCTION

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// ------------------------------------------------------------

// CLASS SYNTAX

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/hr`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/hr`);
//   }
// }

// const bmw = new Car('BMW', 100);
// const mercedes = new Car('Mercedes', 50);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// ------------------------------------------------------------

// USING Object.create()

// const Car2 = {
//   init(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   },

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/hr`);
//   },

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/hr`);
//   },
// };

// const bmw2 = Object.create(Car2);
// bmw2.init('BMW', 200);

// ------------------------------------------------------------

// CHALLENGE #2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this._speed = speed;
//   }

//   accelerate() {
//     this._speed += 10;
//     console.log(`${this.make} speeds up!`);
//     console.log(`${this.make} going at ${this.speedUS} km/hr`);
//   }

//   brake() {
//     this._speed -= 5;
//     console.log(`${this.make} is slowing down...`);
//     console.log(`${this.make} going at ${this.speedUS} km/hr`);
//   }

//   get speedUS() {
//     return this._speed / 1.6;
//   }

//   set speedUS(value) {
//     this._speed = value * 1.6;
//   }
// }

// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// ------------------------------------------------------------

// INHERITANCE BETWEEN "CLASSES" USING CONSTRUCTOR FUNCTIONS

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I'm studying ${this.course}.`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.dir(Student.prototype.constructor);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// ------------------------------------------------------------

// Coding Challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 100, 75);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);

// const ford = new Car('Ford', 55);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford);

// ------------------------------------------------------------

// CODING CHALLENGE 4

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} kh/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} kh/h`);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} kh/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// rivian.accelerate().accelerate().brake().chargeBattery(95);

console.log('Hello Asif');

let name = 'Asif';
name = 'Papa';

if (name === 'Asif') {
  console.log('he is so cool');
}
