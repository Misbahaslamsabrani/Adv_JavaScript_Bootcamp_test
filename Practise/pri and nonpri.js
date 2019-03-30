/* function test(a,c){
    var b = 0;
    c && console.log(a, b, c);
    console.log(a, b)
}
test(5)
test(5,4) */

const func = function(x, y, z){
    y = y || 10;
    z && console.log(x, y, z)
    console.log(x, y) 
}
func(5)
func(2, 3, 4)
