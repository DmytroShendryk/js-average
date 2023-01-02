let numOne = +prompt ("enter your number");
let numTwo = +prompt ("enter your number");
let numThree = +prompt ("enter your number");
const arr = [numOne, numTwo, numThree];
let sum = 0;    
arr.forEach((num) => { sum += num });
average = sum / arr.length;
alert(sum / arr.length);
console.log(average);