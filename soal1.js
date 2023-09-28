//core module
const fs = require('fs');
//external/3rd party module
const readline = require('readline');
//local module
const calc = require('./square_formula.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//output
rl.question('Masukkan nilai panjang: ', (height) => {
    rl.question('Masukkan nilai lebar: ', (width) => {
        const height_square = parseFloat(height);
        const width_square = parseFloat(width);

        console.log(`Luas dari persegi tersebut adalah ${calc.area(height_square, width_square)}`);
        console.log(`Keliling dari persegi tersebut adalah ${calc.circumference(height_square, width_square)}`);
        rl.close();
    });
});