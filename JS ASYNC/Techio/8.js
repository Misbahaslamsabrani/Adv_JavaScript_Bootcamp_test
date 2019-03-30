function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world");
        },2000);
    })
}

var a = job();
a.then((data) => {
    console.log(data);
})
a.catch((err) => {
    console.error(err)
})