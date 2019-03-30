//---------------------------default Parameters
/* function add(a, b = 1){
    console.log(a + b)
}
add(4)

function a(a =2,b=2, c=3){
    console.log(a,b,c)
}
a()
function b(a=0,b=0,c=0){
    console.log(a,b,c)
}
b(1,1,1)
function c(a=0,b=0,c=0,d=0,e=0){
    console.log(a,b,c,d,e)
}
c(undefined,undefined,undefined,null,null)
function d(a=0,b=0,c=0, d=0){
    console.log(a,b,c,d);
}
console.log(NaN, "", ["misbah"], {name: "misbah"}) */

//---------------------------REST PARAMETERS

/* {function func(...params){
    console.log(params);
    console.log(params.length)
}
func()
func(0,1)
func(2,2,2,2)

function p(...p){
    console.log(p)
    console.log(p[0])
    console.log(p.length)
}
p(["misbah"], "king", 0, true, undefined, NaN, 0.9,{name:"misbah"})

// function check(...c = "misbah"){ // Syntax Error } 

// function y(...y,x){ // Syntax Error }

function d(d, ...e){
    console.log(d, e)
}
d("a","l","o") }*/

//-------------------Anonymous Function
/* var r =  function(){
    console.log("yes")
}
r()

var g = function h(){
    console.log("yes?")
}
// h() REFERENCE ERORR: h is not defined

var func = function(x,y){ 
    console.log(x,y)
    return x*y 
}; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log(result) 
} 
product() */



/* //important hoisting
var test_e = function(x,y){
    console.log(x,y);
    return x + y;
}
console.log(test_d())
function test_d(){
    console.log(result)
    var result;
    result = test_e(1,1);
    return result
} */

//----------------FUNCTION CONSTRUCTOR

/* var func = new Function("p", "p1", 'FunctionBody')
console.log(func)
var sum = new Function("p","p","return p * p")
console.log(sum)
console.log(sum(2,2))

var r = new Function("r", "r1", "console.log('misbah'); return r * r1;")
console.log(r)
r(0,0);
console.log(r(0,0))

var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product() */

//----hoisting

//console.log(hum()) TypeError: hum is not a function
//d() TypeError: hum is not a function at d() 
var hum = new Function("console.log('yes1')");
//d() fine
function d(){
    console.log("yes0")
    var a = hum();
}
//d() fine

//----------------Recursion and JavaScript Functions
/* //--Recursion
function a(num) { 
    if(num<=0) { 
        //console.log('if: '+ num)
       return 1; 
    } else { 
        //console.log("else: "+ num * a(num-1))
       return (num * a(num-1)  ) 
    } 
 } 
 console.log("Result:  "+a(6));

//--Anonymous Recursive Function

(function() { 
    var msg = "Hello World" 
    console.log(msg);
 })() */

//----------------------------ARROW FUNCTIONS
/* var fu = x =>  x+1;

console.log(fu(10))

var fu = (x,y) => x+y;

console.log(fu(1,1));

var fun = () => console.log("misbah")
fun()

var du = (x,y) => {var sum = x+y; console.log(sum)}
du(2,2)
 */

//-----Function Hoisting
//immediately invoked function expression
var main = function() { 
    var loop = function() { 
       for(var x = 0;x<5;x++) {
          console.log(x); 
       } 
    }(); 
    //console.log(x); 
    console.log(loop)
 } 
 main();




 