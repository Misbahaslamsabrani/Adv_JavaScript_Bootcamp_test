/* var obj = {
    name: "Tahir",
    age: 28,
    email: "tahir@gmail.com"
}
var { name, email, age, gender} = obj;
console.log(name, email, age, gender)

//Default Values
const {name = "Arsalan", 
email = "Arsalan@gmail.com0", 
age = 32, gender = "Male"} = obj
console.log(name, email, age, gender) */

var obj = {
    name: "misbah",
    age: 22,
    check: function(){
        console.log("Hey! "+ this.name);
    }
}
var { name, age, check} = obj;
console.log(name, age)
console.log(check)
check();