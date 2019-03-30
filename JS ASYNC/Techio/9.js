function job(data) {
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject("error");
        }
        else if(data % 2 === 1){
            setTimeout(() => {
                resolve("odd");
            },1000);
        }
        else if(data % 2 === 0){
            setTimeout(() => {
                reject("even");
            },2000);
        }
    })
}
var data = "value" //"test", 3, 6
var promise = job(data);
promise.then((data) => console.log(data)).catch((error) => console.error(error));