
function task1(callback) {
    setTimeout(() => {
      console.log(1);
      callback();
    }, 1000);
  }
  
  function task2 (callback) {
    setTimeout(() => {
      console.log(2);
     callback();
    }, 2000);
  }
  
  function task3 (callback) {
    setTimeout(() => {
      console.log(3);
      callback();
    }, 1500);
  }
  
  function task4 (callback) {
    setTimeout(() => {
      console.log(4);
     callback();
    }, 3000);
  }
  
  
  function task5 (callback) {
    setTimeout(() => {
      console.log(5);
      callback();
    }, 4000);
  }
  
  
  function task6 (callback) {
    setTimeout(() => {
      console.log(6);
      callback();
    }, 3500);
  }
  
  
  function task7 (callback) {
    setTimeout(() => {
      console.log(7);
    }, 500);
  }
  
  task1(() => {
      task2(() => {
        task3(() => {
          task4(() => {
            task5(() => {
              task6(() => {
                task7();
            })
          })
        })
      })
    })
  });

  const showMessage = (message) => {
    console.log(message);
  }

  const firstMessage = (callback) => {
    showMessage('Hello');
    callback();
  }

  const secondMessage = () => {
    showMessage('World!');
  }

  firstMessage(secondMessage);
  