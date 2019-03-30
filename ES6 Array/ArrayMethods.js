//--------------------------------POP, PUSH, SHIFT, UNSHIFT, SPLICE, SLICE
/* var arr = [0,1,2,3]
console.log(arr.splice(0, 2))
console.log(arr)
var a = [2,3]
console.log(a.splice(0,2)) 
var a = []
console.log(a.push("misbah", "aslam"))
console.log(a)
console.log(a.pop())
console.log(a)
var b = []
console.log(b.unshift("p", "l","o"))
console.log(b)
console.log(b.shift())
console.log(b)
var arr =["misbah", "aslem", "aslam", "mahnoor", "parent", "cake"]
console.log(arr.slice(2,2))
console.log(arr.slice(2,1))
console.log(arr.slice(0))
console.log(arr.slice(2,4))
console.log(arr.slice(0,0))
console.log(arr.slice(0,1))
console.log(arr.slice(3, 5))
console.log(arr.splice(2,0, "ahmed"))
console.log(arr)
console.log(arr.splice(0,"hadia"))
console.log(arr)
*/
//---------------------------------------------JOIN, TOSTRING, SORT, REVERSE
/* //Join()
var a = ["m", "i", "s", "b", "a", "h"]
console.log(a)
var r = ""
for(var i = 0; i < a.length; i++){
    r+= a[i]
}
console.log(r)
var b = ["m", "i", "s", "b", "a", "h"]
console.log(b.join(""))
console.log(b.join("*"))
console.log(b.join(" "))
console.log(b.join("-"))

//toString()
var r = ["d","a", "n", "i", "y", "a", "l"]
console.log(r.toString())
console.log(r.toString(" ")) // koi faraq nae parta

//Alphabetic Sort
var u =  ["h", "a", "i", "b", "j", "c", "k", "d"]
console.log(u.sort())
//Alpabetic reverse
console.log(u.reverse())
//Numeric Sort
var arr = [100,1,5,7,3,9,56,3,8];
console.log(arr.sort())
console.log(arr.sort((a,b) => { return a-b}))
console.log(arr.sort((a,b) => { return b-a}))
//Alpabetic reverse
var o =  ["h", "a", "i", "b", "j", "c", "k", "d"]
console.log(o.reverse())
//Numeric Reverse
var num = [9, 6, 7, 8, 5, 4, 3, 0, 1, 2]
console.log(num)
//if you want it sort first and then revers
console.log(num.sort((a,b) => {return a-b}))
console.log(num.reverse())
//Alphabetic Sort And Reverse
var a = ["misbah", "aslam", "marium", "anas", "sabrani", "rabia"]
console.log(a.sort())
console.log(a.reverse()) */

//---------------------------------------CONCAT

var ab = ["misbah", "aslam", "sabrani"]
var ac = ["marium", "aslam", "sabrani"]
var bc = ab.concat(ac)
console.log(bc)