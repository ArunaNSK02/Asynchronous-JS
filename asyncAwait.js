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