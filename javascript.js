// 1) create functions for the basic math operations: add, subtract, multiply, divide, exponent
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
function exponent(a, b) {
    return a ** b
}
// testing the basic math operations:
// console.log(add(2, 2))
// console.log(subtract(2, 2))
// console.log(multiply(2, 2))
// console.log(divide(2, 2))
// console.log(exponent(2, 2))

// 2) create 3 variables for a number, operator, another number. 
// (each part of a calculator operation)
let first_num;
let second_num;
let operation;

// 3) create a function called operate that takes an operator and 2 numbers and then calls
// one of the above functions on the numbers
function operate(a, b, operation) {
    if (operation == '+') {
        add(a, b)
    } else if (operation == '-') {
        subtract(a, b)
    } else if (operation == '*') {
        multiply(a, b)
    } else if (operation == '/') {
        divide(a, b)
    } else if (operation == '**') {
        exponent(a, b)
    }
}