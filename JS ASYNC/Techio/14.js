//Promise.all()
/* function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log(data);
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
}); */

//promise.all fail-fast behaviour
let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

/* let promise = Promise.all([p1, p2, p3, p4, p5]); */

//3example
let promise = Promise.all([
    p1.catch((err) => {console.log(err)}),
    p2.catch((err) => {console.log(err)}),
    p3.catch((err) => {console.log(err)}),
    p4.catch((err) => {console.log(err)}),
    p5.catch((err) => {console.log(err)})
])
promise

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.log(error);
});