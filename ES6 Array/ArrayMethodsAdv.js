//----MAP,SOME,REDUCE AND REDUCERIGHT,FILTER,FOREACH

//IMPERATIVE
//Imperative : how to do? how you want it done?
/* var a = [1,2,3,4,5,6]
var a1 = []
for(var i = 0; i< a.length; i++){
    a1.push(a[i])
}
console.log(a1)

var cities = ["Karachi", "Islamabad", "Lahore", "Multan"]
var cityFound = "Multan"
var cityFlag= false;
for(var i = 0; i< cities.length; i++){
    if(cities[i] == cityFound){
        cityFlag = true
    }
}
var check = cityFlag ? "Found" : "Not Found"
console.log(check) 

 var numbers = [0,2,4,6,8]
//we want sum up all array elements and log total
var total = 0
for(var i = 0; i< numbers.length; i++){
    total += numbers[i]
}
console.log(total) */

/* var a = [0,1,2,3,4,5,6,7,8,9]
//i want even numbers and odd numbers in alag alag arrays
var odd = []
var even = []
for(var i = 0; i< a.length; i++){
    if(a[i] % 2 == 0){
        odd.push(a[i])
    }
    if(a[i] % 2 == 1){
        even.push(a[i])
    }
}
console.log(odd)
console.log(even) */
//DECLARATIVE
//Declarative: what to do? or what you want it done?

/* //map
var b = [1,2,3,4,5,6]
var b1 = b.map((v) => {
    return v
})
console.log(b1)

var c = b.map(v => v+1);
console.log(c)

var d = b.map(v => {
    if(v == 4 ){
        return v + 4;
    }
})
console.log(d)

//some

var cities = ["Karachi", "Islamabad", "Lahore", "Multan"]
var cityFound = "Multan"
var cityFlag = cities.some((v) => {
    return v == cityFound;
})
var check = cityFlag ? "Found" : "Not Found"
console.log(check)
 */

//reduce
/* var numbers = [0,2,4,6,8]
var total = numbers.reduce((total,value) => {
    //console.log("total", total)
    //console.log("value", value)
    return total + value
})
console.log(total) //20

var numbers1 = [2,2,2,2]
var product = numbers1.reduce((total, value) => {
    return total * value
})
console.log(product) //16

var numbers1 = [2,2,2,2]
var product = numbers1.reduce((total, value) => {
    return total * value
},10)
console.log(product) //160

var f = [25, 20, 30, 35, 40, 45]
var d = f.reduce((total, value) => {
    if(value === 35){
        return total + value;
    }
    else{
        return total 
    }
}, 4)
console.log(d) // 39 */

//reduceRight
/* var numbers = [0,2,4,6,8]
var total = numbers.reduce((total,value) => {
    console.log("total", total)
    console.log("value", value)
    return total + value
})
console.log(total)

var rr = [4,6,8,10]
var ff = rr.reduce((total, value) => {
    return total + value
}, 4)
console.log(ff) // without default value: 28 and with default value: 32

 //filter
var numbers = [0,1,2,3,4,5,6,7,8,9,10]
var odds = numbers.filter(v => {
    return v%2 === 1
})
var evens = numbers.filter(v => {
    return v%2 === 0
})
console.log(odds)
console.log(evens) */

//forEach 
var a = []
var f = a.forEach((v) => {
    console.log(v)
})