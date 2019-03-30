/* //class decalarations are not hoisted
var p1 = new Person();
p1.height = 100;
p1.weight = 300;
console.log(p1); // Output: ReferenceError: Person is not defined

class Person {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
} */

//Class Expressions
//un-named or anonymous

var u1 = new Users();
u1.height = 10;
u1.width = 10;
console.log(u1); // Output: TypeError: Users is not a constructor

var Users = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//named class expression
var p1 = new Person();
p1.height = 10;
p1.width = 10;
console.log(p1); // Output: TypeError: Person is not a constructor


var Person = class Person {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};