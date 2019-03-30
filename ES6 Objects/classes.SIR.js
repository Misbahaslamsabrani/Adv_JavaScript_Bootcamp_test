//1
/* class Human{
    constructor(){
    this.name = "xyz";
    this.fn = function(){
        console.log("human")
           }
    }

    func(){
    console.log("prototype")
    }
}
var h1 = new Human();
console.log(h1)
   console.log(h1.name);
    h1.fn();
    h1.func()  */

//2
class Human{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("eating")
    }
}
class Employee extends Human{
    constructor(name){
        super(name);
        this.age = 10;
        this.working();
        this.eat();
    }
    working(){
        console.log("working")
    }
}
var h1 = new Employee("rehan");
console.log(h1)
console.log(h1.name);
console.log(h1.age);

