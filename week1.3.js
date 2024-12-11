// Program to check if the number is positive, negative, or zero
// Input from the user
const number = parseInt(prompt("Enter a number:"));

// Check if the number is greater than zero
if (number > 0) {
    console.log("The number is positive");
}
// Check if the number is zero
else if (number === 0) {
    console.log("The number is zero");
}
// Check if the number is less than zero
else if (number < 0) {
    console.log("The number is negative");
}
