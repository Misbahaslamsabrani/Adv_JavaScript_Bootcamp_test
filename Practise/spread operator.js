var a = ["m", "i", "s", "s"]
console.log(...a)
/* var b = ...a; //error */

var c = "Misbah";
var d = [...c]
console.log(d)
console.log(...d)

var e = "I am"
var f = ["Misbah"]
var g = [...e, ...f]
console.log(g)
console.log(...g)

//OBJECT DS WITH SPREAD OPERATOR
let { x, y, ...z } = { x: 1, y: 2, a: 0, b: 0, c: 0, d: 0 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // {a: 0. b: 0, c: 0, d: 0}