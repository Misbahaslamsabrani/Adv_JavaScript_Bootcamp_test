var arr = ["m", "i", "s"]
for(let key in arr){
    //console.log(arr[key])
}
var arr1 = ["mi", "is", "sb"]
for(let key of arr1){
    //console.log(key)
}

var obj = {name: "penny", age: 0, color: "red"}
var obj1 = {name: "sheldon", age: 1, color: "yelloe"}
for(let key in obj){
    console.log(key)
    console.log(obj[key])
}
/* for(let key of obj1){ //"ERROR"
    //console.log(key) 
} */

var str = "MISBAH"
for(let key in str){
    console.log(key, " " +str[key])
}
var str1 = "AHMED"
for(let key of str1){
    console.log(key)
}