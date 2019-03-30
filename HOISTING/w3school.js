//JAVASCRIPT HOISTING
/* console.log(abc)
var str = "misbah"
var arr = []
console.log(str)
console.log(arr)
var abc = "test"
console.log(abc) */
/* 
console.log(f)
f = 7
console.log(f)
var f = 9;
console.log(f)
f = 0;
console.log(f)
var f;
console.log(f) */

/* function ab(){
    console.log(a)
    var a = "-"

}
ab()  */

/* var a = 0;
if(true){
    console.log(a)
    var a = 9
    console.log(a)
}
console.log(a) */

/* var a = 0 
if(true){
    var b = 1
    for(var i = 0; i < 3; i++){
        a += b
    }
}
console.log(a, b, i) */
/* var i = 2;
for(var i = 0; i < 4; i++){
    console.log(i)
}
console.log("i" + i) */


//-------------------------------------------//---------------LET
//console.log(l) error
/*  let l = 8;
console.log(l)
l = 9;
console.log(l)
let l = 0; // error
console.log(l)  */

/* let b = 0 
if(true){
    console.log(b)
    let b = 9
    console.log(b)
}
console.log(b) */

/*  let a = 0 
if(true){
    let b = 1
    for(let i = 0; i < 3; i++){
        a += b
        console.log(a,b,i)
    }
    console.log(a,b,i)
}
console.log(a) */ 

/* let j = 2
for(let j = 0; j < 4; j++){
    console.log(j)
}
console.log("j"+ j) */

/* let g = 5
if(true){
    let g = 4
    console.log(g)
}
for(let g = 0; g <=0; g++){
    console.log(g)
}
console.log(g) */

/* (function(){
        var a = 5
        let b = 10
})
();
console.log(a,b)// both not defined */

/* var name = "VAR"
let fname = "LET"
console.log(window.name)
console.log(window.fname) */

/* var a = 0
let a = 9 
if(true){
    var a = 0
}
console.log(a) */

//------------------------//-------------------const

/* var a = 2; 
a = 0;
let b = 2
b = 0
const c = 2
c = 0 //error
console.log(a,b,c) */

/* var a;
let b;
const c; //error
console.log(a,b,c) */

/* const a = 5;
//a = 6; error
const b = 5
 //b = 6 error
const c = undefined
//c = "p" error
console.log(c) */


/* const arr = []
const obj = {}
arr.push("misbah")
obj.name = "misbah"
console.log(arr, obj)
arr.push("p")
obj.length = 3
console.log(arr, obj) */

console.log(a)
const a = 0
