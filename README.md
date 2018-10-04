![CF](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
========================================================

## Implementation
* Setup the package.json file to run lint checks and tests against the greet and arithmetic modules
* Create a file called `index.js` that requires both the greet and arithmetic modules.
* Use this file to "greet" and perform math operations using the imported functions from the 2 modules
* `console.log()` the return values

### Arithmetic Module

#### Write Arithmetic Module Tests
* Use the faker module to randomize input
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

#### Add features to the arithmetic module
* Add support for multiply and divide (be careful to not divide by zero!)
* Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations

#### Refactor the arithmetic module
* DRY the code by externalizing any type checking or argument validation from your methods

---


### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Greet Module Tests
* Use the faker module to randomize input
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument


### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. 
Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.

####Module: arithmetic.js
######Time: 3 Hours

#####Function: add
**Arity:** 2+
**Expected Data Type:** number
**Expected Output Behavior:** the sum of two or more numbers

#####Function: subtract
- **Arity:** 2+
- **Expected Data Type:** number
- **Expected Output Behavior:** the difference of two or more numbers

#####Function: multiply
- **Arity:** 2+
- **Expected Data Type:** number
- **Expected Output Behavior:** the product of two or more numbers

#####Function: divide
- **Arity:** 2
- **Expected Data Type:** number
- **Expected Output Behavior:** the quotient of two numbers

####Module: greet.js
######Time: 10 Minutes

#####Function: hello
- **Arity:** 1
- **Expected Data Type:** string
- **Expected Output Behavior:** user greeting, formatted "Hello, user"


**Resources Referenced:** https://dev.to/srebalaji/es6-for-beginners-with-example-c7

**Pull Requests:**
https://github.com/muddledsignal/lab-01/pull/1

**Travis:**
https://travis-ci.com/muddledsignal/lab-01/jobs/149638330