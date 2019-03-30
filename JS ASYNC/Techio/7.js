//Promise
/* var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
    }, 2000);
});

promise.then((data) => {
    console.log(data);
}).catch((err) => {console.log(err)}) */

/* var a = 1
var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(a == 0){
            resolve(a);
        }
        else{
            reject("a is not 0")
        }
    }, 2000)
})

promise1.then((a) => console.log(`a is ${a}`)).catch((err) => console.log(err)) */


/* var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data + ' 1');
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
}); */


//Important
/* var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('We are all going to die');
    }, 2000);
});

promise.then((data) => console.log(data),(data) => console.error(data)); */

/* var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data + ' 1');
}, function error(data) {
    console.error(data + ' 1');
});

promise.then(function success(data) {
    console.log(data + ' 2');
}, function error(data) {
    console.error(data + ' 2');
});

promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' 3');
}); */