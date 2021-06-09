const prompt = require('prompt-sync')();
let array = prompt('Enter an array:');

if(array.length >= 10){
    console.log('Conditon Met');
} else if(array.length < 10){
    console.log('Conditions Not Met');
}
array = JSON.parse(array);

console.log(typeof array)
console.log(array.length)