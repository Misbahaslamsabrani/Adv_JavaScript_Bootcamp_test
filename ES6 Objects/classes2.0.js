class Users{
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender
    }
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
    deleteUser(){
        console.log(`${this.name} can delete users`)
    }
}
var admin1 = new Admin("Tahir", 28, "Male");
console.log(admin1)
admin1.deleteUser();
var users = [u1, u2, admin1]
console.log(users)
console.log(u1.hasOwnProperty("login"))
console.log(admin1.hasOwnProperty("login"))
console.log(admin1.hasOwnProperty("deleteUser"))