Arrow function
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

sayHello('John'); // Output: "Hello, John!"


Callback Function
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

sayHello('John'); // Output: "Hello, John!"


Callback Functions
function add(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

function logResult(result) {
  console.log(`The result is ${result}.`);
}

add(2, 3, logResult); // Output: "The result is 5."



