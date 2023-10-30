// Understanding operator types

// Day 1 of practice

// 1) Arithmetic
console.log('--Arithmetic Start--');
let numX;

// Add
numX = 5 + 10;
console.log(numX);

// Subtract
numX = 5 - 10;
console.log(numX);

// Multiply
numX = 5 * 10;
console.log(numX);

// Divide
numX = 5 / 10;
console.log(numX);

// Remainder
numX = 7 % 5;
console.log(numX);

/* -------------------------------------------- */
console.log('--Concat--');

// Concat - coerce and convert - output will be string
let concatX = 'Hello' + ' World!';
let concatY = 'true' + 25;
console.log(concatX);
console.log(concatY);

// Concat cont: NOTE adding a boolean to a number will output a number
let bool = true;
let numValue = 50;
let result = bool + numValue;
console.log(result, typeof result);

console.log('-----');
/* -------------------------------------------- */

// Exponent
let exponent = 2 ** 2;
console.log(exponent);

// Increment
let increment = 5;
increment++;
console.log(increment);

// Decrement
let decrement = 10;
decrement--;
console.log(decrement);

/* -------------------------------------------- */

// 2) Assignment
console.log('--Assignment Start--');
let numY;

numY = 20;
console.log(numY);

numY += 10;
console.log(numY);

numY -= 20;
console.log(numY);

numY *= 10;
console.log(numY);

numY /= 2;
console.log(numY);

numY %= 4;
console.log(numY);

numY **= 3;
console.log(numY);

/* -------------------------------------------- */

// 3) Comparison
console.log('--Comparison Start--');
let compare;

// Loose equal (value)
compare = 2 == '2';
console.log(compare);

// Strict Equal (type and value)
compare = 2 === '2';
console.log(compare);

// Loose `not` equal
compare = 10 != '10';
console.log(compare);

// Strict `not` equal
compare = 50 !== '50';
console.log(compare);

// Greater than / less than (equal to)
compare = 25 > 20;
console.log(compare);

compare = 25 >= 20;
console.log(compare);

compare = 25 < 20;
console.log(compare);

compare = 25 <= 20;
console.log(compare);
