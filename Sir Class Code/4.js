var a = 1;
var b = 2;
var c = a + b;
var e = c + a;
var d = b + a;

/* setTimeout(() => {
    b = 3;   
    console.log("Inside")
}, 0);
console.log(b); */

  function fetch(fn){
            console.log("going to fetch", b);
            setTimeout(() => {
                b = 3; 
                console.log("fetch success")
                fn(b); 
            }, 3000);
        }
        console.log("Before fetch", b);
fetch((function(b){
    console.log("Middle");
    return (x) => console.log("Complete", b);
})());
console.log("After fetch", b); 

 /* function y(a){
    console.log("fetch success")
    a(b);
}
y((function(){
    return (x) => console.log("Complete" + x)}())
    )  */

//2
/* setTimeout(function(){
    console.log("1");
    setTimeout(function(){
        console.log("2");
        setTimeout(function(){
            console.log("3")
            setTimeout(function(){
                console.log("4");
                setTimeout(function(){
                    console.log("5")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000); */

//3
/* setTimeout(function(){
    setTimeout(function(){
        setTimeout(function(){
            console.log(3);
        },2000);
        console.log(2);
    },2000);
    console.log(1);
},2000); */

//4
/* var a = [1,2,3,4,5];

        for(var i = 0; i < a.length; i+=2){
            a[i]++
        }

        console.log(a); */

//5
/* var a = [1,2,3,4,5];

        for(var i = 0; i < a.length; i++){
            if(i % 2 == 0){
                a[i] *= a[i];
            }     
        }

        console.log(a); */