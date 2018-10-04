'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');
const faker = require('faker');

const randomNumber = faker.random.number();

console.log(greet('JOHN'));
console.log(arithmetic.add(randomNumber,randomNumber)); // 4
console.log(arithmetic.subtract(randomNumber,randomNumber)); // -2

console.log(randomNumber.toString());
