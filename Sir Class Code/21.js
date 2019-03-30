//------------------------Functins 
//------1
var arr = [1,2,3,4,5];
    for(let val of arr){
      //console.log(val)
     }
//-------2
function abc (){
    //console.log(this);
    this.name = "xyz";
    //return this;
}
var a = abc();
//console.log(a.name);
//------3
function Student(){
    this.name = "xyz";
}
var s = new Student();
//console.log(s.name);
var obj = {};

//-----4
/* var sum = ( a , b ) => {
    console.log("pppp")
    return a+b;
 }
var sum = ( a, b ) => a+b;
var i = 10;
 
var result = sum(10, 20 + 1);
var result2 = sum(10, 20 + i++);
console.log(result)
console.log(result2)
 */

//------5
/* var fn = function (){
    console.log("fn")
}
fn();

(function (){
    var userName = "m";
    var password = "*";
    var email = "@";
    console.log(userName, password, email)

})
();
(function (){
    console.log("p")
})
(); */
//----------6 play 
/* function fn(op, ...arr){
    console.log(arr);
    var result = 0;
    if(op == '+'){
        result = 0;
    } else if(op == '*'){
        result = 1;
    }
    for(var i = 0; i < arr.length; i++){
        if(op == '+'){
            result += arr[i];
        } else if(op == '*'){
            result *= arr[i];
        }
    }
    console.log(result)
}
fn("+",2,3);
fn("*",2,3,5,8,3);
fn("+",2,3,2,5,7,9,65,3,3); */

//-----------------------------------INDEX.js
//--1
 var arr = [100,1,5,7,3,9,56,3,8];
    var counter = 0;
      for(var i=0;i<arr.length;i++) {
      for(var j=i+1;j<arr.length;j++) {
        counter++;
        if(arr[i]>arr[j])
           {
        var temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    
        }
    }
    }