//1
/* var arr = [100, 1, 5, 7, 3, 9, 56, 3, 8];
var s = arr.sort((a, b) => a > b)
console.log(s)
var r = arr.sort((a, b) => a < b)
console.log(r)
var t = arr.sort((a, b) => a - b)
console.log(t)
var u = arr.sort((a, b) => b - a)
console.log(u) */

//2, 3
 /* function Student() {
    this.name = "rehan"

     this.study = function () {
        console.log("study")
    } 
}
Student.prototype.study = function(){
    console.log("study")
}
var st = []
for (var i = 0; i < 1000000; i++) {
    st.push(new Student())
}
console.log(st) 
 */

 //4
 /* var arr = [1,2,5,8,0,234,3];
 var arr2 = [];
 for(var i = 0; i < arr.length; i++){
     arr2.push(arr[i] * 2)
 }
console.log(arr2)

var arr3 = arr.map(x => x *2)
console.log(arr3)

var arr4 = arr.map(x => x==2 ? 3 : x)
console.log(arr4)

var arr5 = arr.map(mul5);
function mul5(x){
    return x * 5;
} 
console.log(arr5)
*/
/* var OKAY = new Array(1,2,5,8,0,234,3)
 OKAY.prototype.mul2 = function(){ // Error: can't set mul2 property of undefined
             var arr = [];
             for(let i = 0; i < this.length; i++){
                 arr.push(this[i] * 2);
             }
             return arr; 
        }

console.log(OKAY) */

//5 imp

/* function Q (){
    var myQ = [];
    this.deQ = function(){
        return myQ.shift();
    }
    this.enQ = function(task){
        myQ.push( task );
    }
}
var q = new Q();
q.enQ("a");
q.enQ("b");
q.enQ("c");

console.log( q.deQ() );
console.log( q.deQ() );
q.enQ("d");
q.enQ("e");
console.log( q.deQ() );
console.log( q.deQ() );
console.log( q.deQ() );
console.log( q.deQ() ); */