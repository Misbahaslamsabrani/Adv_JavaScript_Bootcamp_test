
//1
/* var f = 2
function c() {
    console.log(f())
    f = 8
    console.log(f)
    return;
    function f(){ return "hmmm test"}
}
c()
console.log(f)
console.log(f()) */

//--2
/* function foo(){
    function bar() {
        return 3;
    }
    function bar() {
        return 8;
    }
    return bar();
}
alert(foo());  //8 */