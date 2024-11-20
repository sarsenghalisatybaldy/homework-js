const rates = {
    USD: 0.85,
    KZT: 0.002,
    EUR: 1
};

let totalInEuros = 0;

while (true) {
    let amount = prompt("请添加 (or 'stop' to finish):");
    
    if (amount.toLowerCase() === "stop") {
        break;
    }
    amount = parseFloat(amount);}