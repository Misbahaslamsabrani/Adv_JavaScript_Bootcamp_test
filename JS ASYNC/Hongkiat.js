function foo(){
    console.log("foo")
}
function bar(){
    foo()
    console.log("bar")
}
function baz(){
    console.log("baz")
    bar()
}
baz()

setTimeout( function() { console.log('hey') }, 3000 );