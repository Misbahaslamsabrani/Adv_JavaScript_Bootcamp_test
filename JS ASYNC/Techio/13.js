/* //1
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
}); 
*/


//2
/* function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise1 = job(true);
promise1
.then(function(data) {console.log(data);return job(false);})
.catch(function(error) {console.log(error); return 'Error caught';})
.then(function(data) {console.log(data);})
.catch(function(error) {console.log(error);}) */

/* function test(t){
    return new Promise((resolve, reject)=> {
        if(t){resolve()}
        else reject();
    })
}
let p = test(true)
.then(() => console.log("yes"))
.catch(() => console.log("No"))
.then(() => console.log('what?')) */

//3
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {resolve('success');} else {reject('error');}});}
let promise3 = job(true);
promise3
.then(function(data) {console.log(data);
    return job(true);})
.then(function(data) {
    if (data !== 'success') {
        throw 'Defeat';}
    return job(true);})
.then(function(data) {
    console.log(data);})
.catch(function(error) {
    console.log(error);
    return job(false);})
.then(function(data) {
    console.log(data);
    return job(true);})
.catch(function(error) {
    console.log(error);
    return 'Error caught';})
.then(function(data) {
    console.log(data);
    return new Error('test');})
.then(function(data) {console.log('Success:', data.message);})
.catch(function(data) {console.log('Error:', data.message);}); 

/* function test(t){
    return new Promise((resolve, reject)=> {
        if(t){resolve()}
        else reject();
    })
}
let p = test(true)
.then(() => {
    console.log("yes") 
    return new Error('test');
})
.catch((s) => console.log("No" + s))
.then((s) => console.log('what?' + s))
 */

/* try{
    var a = new Error("hey i am error")
    console.log(a)
  }
  catch(err) {
    console.log(error)
  } */


