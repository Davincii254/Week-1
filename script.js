// Arrow function
// const sayHello = (name) => {
//   console.log(`Hello, ${name}!`);
// };

// sayHello('John'); // Output: "Hello, John!"




// Callback Functions
// function add(num1, num2, callback) {
//   const sum = num1 + num2;
//   callback(sum);
// }

// function logResult(result) {
//   console.log(`The result is ${result}.`);
// }

// add(2, 3, logResult); // Output: "The result is 5."



// Callback functions
// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);




// .map
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);


// .find
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "cherries";
// }

// console.log(inventory.find(isCherries));



// .filter
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); 