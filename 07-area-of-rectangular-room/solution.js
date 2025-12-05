
var userChoice = prompt("Do you want to enter dimensions in feet or meters? (Type 'feet' or 'meters')").toLowerCase();

if (userChoice !== 'feet' && userChoice !== 'meters') {
    console.log("Invalid choice. Please type 'feet' or 'meters'.");
    return;
};

var length = Number(prompt(`What is the length of the room in ${userChoice}?`));
var width = Number(prompt(`What is the width of the room in ${userChoice}?`));


if (isNaN(length) || isNaN(width)) {
    console.log("Please enter valid numbers for length and width.");
    return;
};

if (length <= 0 || width <= 0) {
    console.log("Length and width must be positive numbers and greater than zero.");
    return;
};

if (userChoice === 'feet') {

    calculateAreaInFeet();
} else {

    calculateAreaInMeters();
};


function calculateAreaInMeters() {
    console.log(`You entered dimensions of ${length} by ${width} ${userChoice}.`)
    var squareMeters = length * width;
    console.log(`The area is ${squareMeters} m²`);
    console.log('The formula for this conversion is m² = ft² × 0.09290304');
}

function calculateAreaInFeet() {
    console.log(`You entered dimensions of ${length} by ${width} ${userChoice}.`)
    var squareFeet = length * width;
    var squareMeter = (squareFeet * 0.09290304).toFixed(3);
    console.log(`The area is ${squareFeet} ft²`)
    console.log(`Area in meters = ${squareFeet} * 0.09290304 = ${squareMeter} m²`);
    console.log('The formula for this conversion is m² = ft² × 0.09290304');
}