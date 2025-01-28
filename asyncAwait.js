let displayObj = document.getElementById("response-obj");

function myDisplayer(some) {
    displayObj.innerHTML = some;
  }

async function getFile(filePathOne, filePathTwo) {
    let htmlDoc = await fetch(filePathOne);
    let cssDoc = await fetch(filePathTwo);
    let htmlDocContent = await htmlDoc.text();
    let cssDocContent = await cssDoc.text();

    myDisplayer(htmlDocContent);
    const styleElement = document.createElement("style");
    styleElement.textContent = cssDocContent;
    document.head.appendChild(styleElement);
}

getFile("../Learn RWD/ResponsiveImageGrid/index.html", "../Learn RWD/ResponsiveImageGrid/style.css");


async function getDummyJSON(filePath) {
    const req = new XMLHttpRequest();
    req.open('GET', filePath);
    req.onload = () => {
      if (req.status == 200) {
        return req.response;
      } else {
        console.log("File unable to serve!");
      }
    }
    req.send();
}

getDummyJSON('https://dummyjson.com/products/1').then((response) => {
    console.log(response);
})