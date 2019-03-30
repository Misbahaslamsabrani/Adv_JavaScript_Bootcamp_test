//---------------------------------FOR LOOP
/* var num = 5 
var factorial = 1; 
for( let i = num ; i >= 1; i-- ) { 
   factorial *= i ; 
} 
console.log(factorial);

for(let temp, i = 0, j= 1; j < 30; temp=i,i=j,j=i+temp)
console.log(j) */

//--------------------------------FOR...IN LOOP
/* var obj = {a: "m", b: "i", c: "s"}
var arr = [0, 1, 2]
for(let prop in obj){
    console.log(obj[prop])
}
for(let index in arr){
    console.log(arr[index])
} */

//--------------------------------FOR...Of LOOP

/* for(let val of [11,12,13,14]){
    console.log(val)
} */

 /* for(let key of {a: 15, b: 16, c: 17}){ // Type Error : {} is not iterable
    console.log(key)
}  */

/* var ob = {a: 0, b: 1, c: 2}
for( let keys of ob){ // Type Error: ob is not iterable
    console.log(keys)
} */

//-------------------------------while loop
/* var num = 5; 
var factorial = 1; 

while(num >= 1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log(factorial);  */

//---------------------do while loop
/* var n = 10; 
do{
    console.log(n)
    n--;
}
while(n >= 0);

var m = 10;
do{
    console.log(m);
    m--;
}
while(m >= 0); */

// the loop control statements
var i = 1;
while(i <= 10){
    if( i % 5 == 0){
        console.log(i, i % 5)
        break;
    }
    else{
        console.log(i, i % 5)
    }
    i++;
}