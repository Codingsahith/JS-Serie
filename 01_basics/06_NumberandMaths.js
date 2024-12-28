//  number and maths

//***************number*************** */

const num = 2003
// console.log(num)
// or 
const score = new Number(23)
// console.log(score)

// console.log(score.toString().length)
// console.log(score.toFixed(5)) //output: it increses the decimals like 23.0, 23.00,...,23.00000

const number = 23.0811
// console.log(number.toPrecision(6))

const money = 1000000
// console.log(money.toLocaleString('en-In'))

//***************maths*****************/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1); // random gives from 0 to ++ like 0.7468, after adding +1 it starts from 1 like 1.743689.
console.log(Math.floor(Math.random()*10) + 1);// it wil round off lowest values.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // min starts from 10, because min value is 10. after adding the min it gives above the min value.
