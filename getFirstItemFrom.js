const prompt = require('prompt-sync')();
let array = prompt('Enter an array:');
array = JSON.parse(array);


console.log(array[0])