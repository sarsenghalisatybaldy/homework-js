
let userInput = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= userInput; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    if(i==30){
        break;
        console.log(i);
    }
}