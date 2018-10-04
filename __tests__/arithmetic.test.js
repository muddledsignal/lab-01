'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

describe('arithmetic.js add function', () => {
  const numA = faker.random.number();
  const numB = faker.random.number();
  const numAPlusB = numA + numB;
  const randomString = faker.name.findName();

  it('returns the sum of two numbers', () => {
    expect(arithmetic.add(numA, numB)).toEqual(numAPlusB);
  });

  it('returns null if invoked without at least two parameters', () => {
    expect(arithmetic.add(faker.random.number())).toBeNull();
  });

  it('returns null if a parameter is an array', () => {
    expect(arithmetic.add(faker.random.number(), [])).toBeNull();
  });

  it('returns null if a parameter is an object', () => {
    expect(arithmetic.add(faker.random.number(), {})).toBeNull();
  });

  it('returns null if a parameter is a string', () => {
    expect(arithmetic.add(faker.random.number(), randomString)).toBeNull();
  });
});

describe('arithmetic.js subtract function', () => {
  const numA = faker.random.number();
  const numB = faker.random.number();
  const numAMinusB = numA - numB;
  const randomString = faker.name.findName();

  it('returns the difference of two numbers', () => {
    expect(arithmetic.subtract(numA, numB)).toEqual(numAMinusB);
  });

  it('returns null if invoked without at least two parameters', () => {
    expect(arithmetic.subtract(faker.random.number())).toBeNull();
  });

  it('returns null if a parameter is an array', () => {
    expect(arithmetic.subtract(faker.random.number(), [])).toBeNull();
  });

  it('returns null if a parameter is an object', () => {
    expect(arithmetic.subtract(faker.random.number(), {})).toBeNull();
  });

  it('returns null if a parameter is a string', () => {
    expect(arithmetic.subtract(faker.random.number(), randomString)).toBeNull();
  });
});

describe('arithmetic.js multiply function', () => {
  const numA = faker.random.number();
  const numB = faker.random.number();
  const numC = numA * numB;
  const randomString = faker.name.findName();

  it('returns the product of two numbers', () => {
    expect(arithmetic.multiply(numA, numB)).toEqual(numC);
  });

  it('returns null if invoked without at least two parameters', () => {
    expect(arithmetic.multiply(faker.random.number())).toBeNull();
  });

  it('returns null if a parameter is an array', () => {
    expect(arithmetic.multiply(faker.random.number(), [])).toBeNull();
  });

  it('returns null if a parameter is an object', () => {
    expect(arithmetic.multiply(faker.random.number(), {})).toBeNull();
  });

  it('returns null if a parameter is a string', () => {
    expect(arithmetic.multiply(faker.random.number(), randomString)).toBeNull();
  });
});

describe('arithmetic.js divide function', () => {
  const numA = faker.random.number();
  const numB = faker.random.number();
  const numADivB = numA / numB;
  const randomString = faker.name.findName();

  it('returns the quotient of two numbers', () => {
    expect(arithmetic.divide(numA, numB)).toEqual(numADivB);
  });

  it('returns null if invoked without at least two parameters', () => {
    expect(arithmetic.divide(faker.random.number())).toBeNull();
  });

  it('returns null if a parameter is an array', () => {
    expect(arithmetic.divide(faker.random.number(), [])).toBeNull();
  });

  it('returns null if a parameter is an object', () => {
    expect(arithmetic.divide(faker.random.number(), {})).toBeNull();
  });

  it('returns null if a parameter is a string', () => {
    expect(arithmetic.divide(faker.random.number(), randomString)).toBeNull();
  });
});