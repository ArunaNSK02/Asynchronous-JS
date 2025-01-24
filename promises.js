const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Great!");
        } else {
            reject("Oops!");
        }
    }, 3000)
})

promise.then((result) => {
    console.log(result);
}, (reason) => {
    console.log(reason);
})