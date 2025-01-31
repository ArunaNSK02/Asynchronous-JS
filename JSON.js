const req = new XMLHttpRequest();
req.open('GET', 'https://dummyjson.com/products/1');
req.onload = () => {
    console.log(JSON.parse(req.responseText));
    document.getElementById("response-obj").innerHTML = req.responseText;
}
req.send();