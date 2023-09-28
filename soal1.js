//core module
const fs = require('fs');
//local module
const calc = require('./square_formula.js');

//output
console.log(`Luas dari persegi tersebut adalah ${calc.area(10, 20)}`);
console.log(`Keliling dari persegi tersebut adalah ${calc.circumference(10, 20)}`);