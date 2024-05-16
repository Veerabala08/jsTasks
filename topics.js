// Please learn below topics  for today 

// setTimeout
// setInterval
// Callbacks
// Promises
// Callback Hell
// Async/Await

// promises
// pending

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>res.json())
.then((data)=>console.log(data))

// instead of then we can use await 
async function getTodo(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    console.log(data)
}
getTodo()

//setIntervel
let count = 0;
function printCount() {
  console.log("Count:", count++);
}
const intervalId = setInterval(printCount, 1000); // Print count every second
// To stop the interval (important for avoiding infinite loops):
clearInterval(intervalId);


// Example of Callbacks and settime out

/* pass the function as argument to a function to call 
 the function when the called function completes*/
function fetchData(callback) {
    setTimeout(() => {
      const data = 'Some data';
      callback(data);
    }, 2000);
  }

function datafunc(data) {
    console.log('Data received:', data);
    
  };
    fetchData(datafunc)
  console.log('Fetching data...');

//promise
function Walk(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const walk = 1;
            if (walk){
                resolve("walked")
            }
            else{
                reject("u didnt walk")
            }
        },3000);
    });
}

function run(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const run = 1
            if (run) {
              resolve("running");
            } else {
              reject("u didnt run");
            }
        }, 2000);
    });
}

function breath(){
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const breath = 0
        if(breath){
            resolve("breath")
        }
        else{
            reject("u didnt breath")
        }
    }, 2000);
});
}
//method channeling
Walk().then(value => {console.log(value); return run()})
      .then(value => {console.log(value); return breath()})
      .then(value => {console.log(value); console.log("exercise finished")})
      .catch(error => console.log(error))