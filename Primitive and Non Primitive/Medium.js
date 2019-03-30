/* //primitives are immmutable
var string = "misbah"
console.log(string[0])
string[0] = "M"
console.log(string[0])
//non primitives are mutable
var arr = ["m","i","s"]
console.log(arr[0])
arr[0] = "M"
console.log(arr[0])
//undefined, null, boolean, number can't be changed
var un = undefined;
var num = 0;
var nu = null;
// primitives values if are same can be compared
var f = 0
var g = 0
console.log(f == g)

var str = " "
var str1 = " "
console.log(str === str1)

var boo = true
var boo1 = true
console.log(boo == boo1)

var un = undefined;
var un1 = undefined;
console.log(un == un1)
console.log(un == nu) // values same hai true
console.log(un === nu) // types same nai false

// but non primitives if are same but canot campared

var arr = []
var arr1 = []
console.log(arr === arr1)

var obj = {}
var obj1 = {}
console.log(obj == obj1) */

var arr = [ 'one', 'two', 'three', 'four', 'five' ];
arr[1] = 'TWO';
console.log(arr) 

var obj1 = {}
var obj2 = obj1
console.log(obj1 === obj2)
obj1.name = "misbah"
obj2.fname = "aslam"
console.log(obj1, obj2)