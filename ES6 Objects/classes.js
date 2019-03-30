/* class People {
    constructor(name, fname, age) {
        this.name = name,
        this.fn = fname,
        this.age = age
    }
}
var p1 = new People("misbah", "aslam", 22);
var p2 = new People("marium", "aslam", 23);
console.log(p1)
console.log(p2)
console.log(p1.name)
console.log(p2["fn"])
console.log(delete p1.fn)
console.log(p1)
for( var prop in p2){
    console.log("i am form p2: " + prop)
}
console.log(p1.hasOwnProperty("fn")) */


//methods

/* class Users{
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
    checkAge(){
        if(this.age > 18){
            console.log("you're okay to go")
        }
    }
}
var u1 = new Users("misbah", 22, "Female")
var u2 = new Users("ahmed", 23, "Male")
console.log(u1)
console.log(u2)
u1.login().logout();
u2.logout().login()
u1.checkAge();
u2.checkAge(); */