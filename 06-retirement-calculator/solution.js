const currentYear = new Date().getFullYear();
console.log(currentYear);

var currentAge = Number(prompt('What is your current age?'));
var retirementAge = Number(prompt('At what age would you like to retire?'));
console.log(currentAge, retirementAge)

var yearsUntilRetirement = retirementAge - currentAge;
var retirementYear = currentYear + yearsUntilRetirement;

if (yearsUntilRetirement > 0) {
    console.log(`You have ${yearsUntilRetirement} years left until you can retire.`);
    console.log(`It's ${currentYear}, so you can retire in ${retirementYear}.`);
} else if (yearsUntilRetirement === 0) {
    console.log(`You are due to retire this year, ${currentYear}.`);
} else {
    console.log(`The current year is ${currentYear} and so you should have retired in ${retirementYear}.`);
}
