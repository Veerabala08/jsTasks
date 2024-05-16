// Team , Hope you have learned all the listed modules   ,
//  Please Perform the Below task to calculate the EB  Bill

// 1 to 100 units – Rs. 10/unit
// 100 to 200 units – Rs. 15/unit
// 200 to 300 units – Rs. 20/unit
// above 300 units – Rs. 25/unit

// If input is 90Units  output should be 900.

// Try to implement above topics in this task .
// Let me know if you have any queries
const prompt = require("prompt-sync")({sigint:true});
function calculateElectricBill(units) {
  let billAmount = 0;
  if (units <= 100) {
    billAmount = units * 10;
  } else if (units <= 200) {
    billAmount = 1000 + (units - 100) * 15;
  } else if (units <= 300) {
    billAmount = 2500 + (units - 200) * 20;
  } else {
    billAmount = 5500 + (units - 300) * 25;
  }
  return billAmount;
}

console.log("******EB Calculator*******\n");
let consumedUnit = 0;
do {
  consumedUnit = prompt("Enter the Consumed Units ");
  if (consumedUnit < 0) {
    console.log("Please enter a non-negative number of units.");
  }
} while (consumedUnit < 0);

let electricBill = calculateElectricBill(consumedUnit);
console.log(`The bill amount is Rs. ${electricBill}`);

