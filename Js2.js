
var transactionAmount = 100; 


var fee = 3;
var interestRate = 0.01;
var transactionCost = transactionAmount + fee + (transactionAmount * interestRate);


console.log("The total cost of the transaction is: $" + transactionCost.toFixed(2));
