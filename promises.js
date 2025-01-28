let displayObj = document.getElementById("response-obj");

function myDisplayer(some) {
    displayObj.innerHTML = some;
}

function getFile(filePath) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', filePath);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response)
            } else {
                reject("Error: " + req.status)
            }
        }
        req.send();
    }) 
}

Promise.all([getFile("../Learn RWD/ResponsiveImageGrid/index.html"), getFile("../Learn RWD/ResponsiveImageGrid/style.css")]).then((values) => {
    myDisplayer(values[0]);
    const styleElement = document.createElement("style");
    styleElement.textContent = values[1];
    document.head.appendChild(styleElement);
})

function getDummyJSON(filePath) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', filePath);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response)
            } else {
                reject("Error: " + req.status)
            }
        }
        req.send();
    })
}

getDummyJSON('https://dummyjson.com/products/1').then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})