let displayObj = document.getElementById("response-obj");

function getDummyJSON(filePath) {
  const req = new XMLHttpRequest();
  req.open('GET', filePath);
  req.onload = () => {
    if (req.status == 200) {
      console.log(req.response);
    } else {
      console.log("File unable to serve!");
    }
  }
  req.send();
}

getDummyJSON('https://dummyjson.com/products/1');




function myDisplayer(some) {
  displayObj.innerHTML = some;
}

var retrievedFiles = [];

function getFile(filePath, callBack) {
  const req = new XMLHttpRequest();
  req.open('GET', filePath);
  req.onload = () => {
      if(req.status == 200) {
          retrievedFiles.push(req.response);
          callBack();
      } else {
          console.log('Error happened!');
      }
  }
  req.send();
}

function sendFunction() {
  if (retrievedFiles.length == 2) {
      myDisplayer(retrievedFiles[0]);
      const styleElement = document.createElement("style");
      styleElement.textContent = retrievedFiles[1];
      document.head.appendChild(styleElement);
  } else {
      getFile("../Learn RWD/ResponsiveImageGrid/style.css", sendFunction);
  }
}

getFile("../Learn RWD/ResponsiveImageGrid/index.html", sendFunction);