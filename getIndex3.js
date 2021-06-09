const prompt = require('prompt-sync')();
let array = prompt('Enter an array:');
array = JSON.parse(array);


if(array.length >= 4){
    console.log(array[4])
} else if(array.length <4){
    let lastElement = array.length
     console.log(lastElement);
}
