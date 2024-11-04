num = prompt('hh')
// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Example usage
const values = [1, 2, 3, 4, 5, ]; // Replace with actual numbers
console.log("Average:", calculateAverage(values));