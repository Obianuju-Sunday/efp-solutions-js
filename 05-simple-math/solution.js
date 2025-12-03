// Challenge 5 - Simple Math
var num1 = Number(prompt('Enter the first number:'));
var num2 = Number(prompt('Enter the second number:'));

if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid input. Please enter numeric values.');
} else {
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
if (num2 !== 0) {
    var quotient = num1 / num2;
    console.log(`The quotient when ${num1} is divided by ${num2} is ${quotient}`);
}
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The difference when ${num2} is subtracted from ${num1} is ${difference}`);
console.log(`The product of ${num1} and ${num2} is ${product}`);
}