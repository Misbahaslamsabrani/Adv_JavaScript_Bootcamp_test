 /* //broken chain
   function test() {
    var promise = job();

    promise.then(function(data) {

    });

    return promise;
} 
//you should write this:
function test1(){
    return job().then((data)=> { return data})
}

test().then((data) => console.log(data));
test1().then(data => console.log(data))
*/
function job(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello misbah here");
        })
    })
}

/* var a = new Promise((resolve, reject) => {})
console.log(typeof(a))
var b = a.then;
console.log(typeof(b)) */

/* function job() {
    if (false) {
        return aNewPromise();
    } else {
        return Promise.resolve(42)
    }
}

var result = job();

if (typeof result === 'object' && typeof result.then === 'function') {
    console.log("yes it is a Promise");
} else {
    console.log("No it's not")
    console.log(result)
}

function aNewPromise(){
    return new Promise((resolve, reject) => {})
} */

/* function test(){
    var promise = job();
    return new Promise((resolve, reject) => {
        promise.then(function(data){
            resolve(data);
        },
        function(error){
            reject(error)
        })
    })
} */
function test(){
    return job().then(function(data){return data})
}

test().then((data) => {console.log(data)})
test().catch((err) => {console.log(err)})