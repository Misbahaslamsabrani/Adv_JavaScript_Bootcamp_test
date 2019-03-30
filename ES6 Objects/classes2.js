class Users{
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender
        this.letMeCheck = function(a){
            console.log("Hello I am from " + a)
        }
    };
    login(){
        console.log(`${this.name} just Logged In`)
        return this;
    }
    logout(){
        console.log(`${this.name} just logged out`)
        return this;
    }
}
var u1 = new Users("misbah", 22, "Female")
var u2 = new Users("ahmed", 23, "Male")

class Admin extends Users{
 constructor(name, age, gender,email, address){
     super(name,age,gender);
     this.email = email,
     this.address = address
 }
}
var admin1 = new Admin("Tahir", 28, "Male", "Tahir@gmail.com", "xzy");
u1.letMeCheck("Users")
admin1.letMeCheck("Admin")
console.log(u1.hasOwnProperty("letMeCheck"), u1.hasOwnProperty("login"))


