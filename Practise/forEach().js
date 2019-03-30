var a = ["m","-",2,"2"," "]
var b = a.forEach((v,i) => {
    //console.log(v)
    return v
})
//console.log(a)
//console.log(b)

var k = [2,4,6,8]
k.forEach((v,i,arr) => {
    arr[i] = v+2
    
}) 
console.log(k)


//map
var d = ["m","-",2,"2"," "]
var e = a.map((v,i) => {
    return "value:" + v
})
//console.log(d)
//console.log(e)

var i = 0;
var j = [1,1,1,,1]
j.forEach((v,index) => {
    i += v
    console.log("i:"+i, "value: "+v, "index:" +index, "arr value: " +j[index])
})
console.log(i)

