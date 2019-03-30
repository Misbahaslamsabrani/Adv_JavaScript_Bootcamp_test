/* function job1(callback) {
    setTimeout(function() {
        callback('test 1');
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback('test 2');
    }, 4000);
}

job1(function(data) {
    console.log(data);

    job2(function(data) {
        console.log(data);
    });
}); */

job1(function() {
    doSomething1();

    job2(function() {
        doSomething2();

        job3(function() {
            doSomething3();

            job4(function() {
                doSomething4();
            });
        });
    });
});

function doSomething1(){
    console.log(1);
}
function doSomething2(){
    console.log(2);
}
function doSomething3(){
    console.log(3);
}
function doSomething4(){
    console.log(4);
}
var counter = 0;

job1(function() {
    doSomething1();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

job2(function() {
     doSomething2();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

function done() {
    console.log('done');
}