//ARRAY Constructor

/* var arr = []
console.log(arr)

var ar = new Array()
console.log(arr)

var r = new Array(4);
console.log(r)

var j = new Array(4,"Merry", "Tom", "Jhon", "King")
console.log(j)
console.log(j.length)
console.log(j[0]) */

//Array Traversal 

/* var a =  [1001, 1002, 1003, 1004]
for(let index in a){
console.log(a[index])
}
 */


//Multi dementional Arrays
/* var arr = [[1,2,3,4], [1,2,3,4]]
for(var i = 0; i< arr.length; i++){
    for(var j = 0; j < arr[i].length; j++ ){
        console.log(arr[i][j])
    }
} */

// Array De-structing
/* var arr = [12, 13]
var [x, y] = arr
console.log(x,y) 

 var c1 = [1,2,3,4]
const [a,b,c,d] = c1
console.log(a,b,c,d)

var f = [undefined, null, "ooo", 1, true]
const [g,h,i,j, k] = f
console.log(g,h,i,j, k)

var hh = []
var [jj, kk, ll] = hh
console.log(jj, kk, ll)

const play = [0,1,2,3]
const [,, x, y, z] = play
console.log(x, y, z) */

// DEFAULT VALUE
/* //es5
const arr = [0,1,2]
const a = arr[0] ? arr[0] : 10;
const b = arr[1] ? arr[1] : 11;
const c = arr[2] ? arr[2] : 12;
const d = arr[3] ? arr[3] : 13;
console.log(a,b,c,d);

//es6 
const arr1 = [0,1,2]
const [a1=10, b1=11, c1=12, d1=13] = arr1
console.log(a1, b1, c1, d1) */

//PURE AND IMPURE FUNCTIONS
/* //pure functions
var a = 4,
  b = 5,
  c = 2;
function sum(a, b, c) {
  a = a + b;
  return a * c;
}

console.log(sum(a, b, c)); //18

console.log(a, b, c) //4,5,2

var a = 0, b = 4, c = a, d = c
function gg(a,b,c,d){
a = a*c
b = b*c
d = d*c;
return a+d+c
} 
console.log(gg(a,b,c,d)) // 0
console.log(a,b,c,d)// 0, 4, 0, 0

//impure functions
var a = 4,
  b = 5,
  c = 2;
function sum() {
  a = a + b;
  return a * c;
}

console.log(sum()); //18
console.log(a,b,c); //9, 5, 2 */

//Side Effects and shared variables

let x = 2;
const add = () => x+=1;
const multiply = () => x*=5
/* add()
multiply()
console.log(x) */

multiply()
add()
console.log(x)