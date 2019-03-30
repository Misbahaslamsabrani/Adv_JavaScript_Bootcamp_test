var ass = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello")
    })
})
.then((d) => console.log(d))
.catch((err) => console.error(err))

var ass1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("hello1");
    })
})
.then((d) => console.log(d), (err) => console.error(err))