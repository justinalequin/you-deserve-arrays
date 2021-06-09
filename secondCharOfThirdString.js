const prompt = require('prompt-sync')();
let array = prompt("Enter an a few strings into your array:");
array = JSON.parse(array);
console.log(typeof array[2])

if (typeof array[2] !== 'string'){
    console.log("Error")
} if(typeof array[2] === 'string'){
    
}


console.log(array[2][1])
