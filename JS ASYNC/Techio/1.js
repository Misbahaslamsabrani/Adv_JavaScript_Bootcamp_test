//Asynchronous code using setTimeout

/* setTimeout(() => {
    console.log("i am async message")
}, 1000)
console.log("i am sync message") */

//Asynchronous code is always executed after the main thread

/* setTimeout(() => {
    console.log(" aync message")
})
console.log('test');
for(let i = 0; i < 1000; ++i){
    console.log("")
    doSomething();
}
console.log("test2")
function doSomething(){
    return 1+1
} */

//Asynchronous code using setInterval
let counter = 0;
let timer = setInterval(() => {
    console.log("async message")
    counter += 1;
    if(counter >= 5){
        clearInterval(timer);
    }
},1000)
console.log("sync message")


