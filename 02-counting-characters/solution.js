// Challenge 2 - Counting the number of characters
var userInput = prompt('What is the input string?');
console.log(`${userInput} has ${userInput.length} characters.`)

if(userInput.length === 0){
    console.log('Input cannot be empty');
}

