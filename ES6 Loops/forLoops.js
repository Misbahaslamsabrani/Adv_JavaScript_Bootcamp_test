/* for(var i = 0; i <= 3; i++){
    console.log(i)
}
console.log("M:",i)
for(var j = 0; j >= -3; j--){
    console.log(j)
}
console.log("M:",j)

var arr = ["m", 'i', "s", "b", "a"]
var flag = false;
for(var k = 0; k < arr.length; k++){
    if(arr[k] === "b"){
        console.log("yes")
        flag = true;
        break;
    }
}
if(!flag){
console.log("no")
}

var a = ["a", "b", "c", "d"]
var A = ["A", "B", "C", "D"]
for(var l = 0; l < a.length; l++){
    for(var m = 0; m < A.length; m++){
        console.log(a[l], A[m])
    }
} */

var r = 0; 
for(; r < 2; ){
    console.log("r: ", r)
    r++
}

for(var i = 0; i <7; i++){
    for(var j = 0; j <7; j++){
        document.write(" * ")
    }
    document.write("<br />")
}