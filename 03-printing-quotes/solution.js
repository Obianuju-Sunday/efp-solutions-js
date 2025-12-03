// Challenge 3 - Printing Quotes
var quote = prompt('What is the quote?');
var quoter = prompt('Who said it?');
// using template literals to log result
console.log(`${quoter} says, "${quote}"`)
// using string concatenation
console.log(quoter + ' says' + ' ' + '\'' + quote + '\'')