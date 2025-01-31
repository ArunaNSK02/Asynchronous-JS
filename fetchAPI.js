// Retrieving data from server using 'GET' method
fetch('https://dummyjson.com/users/1')
.then((response) => {
    console.log(response);
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})



//Sending, Modifying data to server using 'POST'and 'PUT' method
fetch('https://dummyjson.com/users/',{
    method: '',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        firstName: "Aruna",
        lastName: "Caldera",
        age: 22
    })
})
.then((response) => {
    console.log(response);
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})

//async await function to communicate with API
async function communicator(url, optionObject) {
    try {
        const response = await fetch(url, optionObject);
        const bodyObj = await response.json();
        console.log(bodyObj);
    } catch (error) {
        console.log(error);
    }
}

let addUser = {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        firstName: "Aruna",
        lastName: "Caldera",
        age: 22
    })
}

communicator('https://dummyjson.com/users/');



