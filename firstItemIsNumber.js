const prompt = require('prompt-sync')();
let array = prompt("Enter an array:");
array = JSON.parse(array);
console.log(array[0])
console.log(typeof array[0])

if(typeof array[0] !== 'number'){
    console.log('Your first index in your array is not a number.')
} if(typeof array[0] === 'number'){
    console.log('Your first index is a number.')
}