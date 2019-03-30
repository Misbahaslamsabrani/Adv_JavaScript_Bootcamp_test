function job1(callback) {
    setTimeout(function() {
        console.log("Inside job1")
        callback('test 1');
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        console.log("Inside job2")
        callback('test 2');
    }, 4000);
}

function doSomething1(){
    console.log("do something 1");
}
function doSomething2(){
    console.log("do something 2");
}

var counter = 0;

job1(function(data) {
    console.log(data)
    doSomething1();

    counter += 1;

    if (counter == 2) {
        done(1);
    }
});

job2(function(data) {
    console.log(data)
     doSomething2();

    counter += 1;

    if (counter == 2) {
        done(2);
    }
});

function done(num) {
    console.log('done'+ num);
}