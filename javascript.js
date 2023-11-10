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
    let answer;
    a = Number(a)
    b = Number(b)
    if (operation == '+') {
        answer = add(a, b)
    } else if (operation == '-') {
        answer = subtract(a, b)
    } else if (operation == '*') {
        answer = multiply(a, b)
    } else if (operation == '/') {
        answer = divide(a, b)
    } else if (operation == '**') {
        answer = exponent(a, b)
    }
    // update_answer(answer)
    return answer
}

//function to update the display once we have an answer from operate
function update_answer(answer) {
    const ans_disp_div = document.querySelector('.display-ans')
    ans_disp_div.textContent = answer
}
// function to update the upper part of the display (where the equations are)
function update_display(text) {
    const disp_div = documenet.querySelector('.display')
    disp_div.textContent = text
}

// function to delete last character from the string
function delete_str(str) {
    arr = str.split('');
    arr.splice(-1, 1)
    new_str = arr.join('')
    console.log(new_str)
    return new_str;
}
//function to disable the number buttons
function disable_buttons() {
    const num_buttons = document.querySelectorAll('.numbers')
    num_buttons.forEach(elem => {
        elem.disabled = true;
    })
}
//function to enable the buttons
function enable_buttons() {
    const num_buttons = document.querySelectorAll('.numbers')
    num_buttons.forEach(elem => {
        elem.disabled = false;
    })
}
function disable_decimal() {
    const dec_div = document.querySelector('#decimal')
    dec_div.disabled = true
}

function id_converter(button_str) {
    if (button_str === 'decimal') {
        return '.'
    } else {
        return button_str
    }
}
//function to clear the calculator


function calculator() {
    //reference to all of the buttons
    const buttons = document.querySelectorAll('button')
    // reference to the display
    const disp_div = document.querySelector('.display')
    // reference to the answer part of the display
    const ans_div = document.querySelector('.display-ans')
    let disp_val = '';
    let prev_val = 0;
    let current_val = null;
    let operation = null;
    let temp
    let prev_operation
    let converted_id
    //Listener for for button clicking
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            //when an operator is pressed
            if (button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/') {
                // temp = operate(Number(prev_val), Number(current_val), button.id)
                // if we have a first number, then we can record the operation
                if (current_val !== null) {
                    prev_operation = operation
                    operation = button.id
                    disp_val += button.id
                    if (prev_val !== 0) {
                        prev_val = operate(prev_val, current_val, prev_operation)
                        // disp_val += button.id;
                    } else {
                        prev_val = current_val;
                    }
                    current_val = null;
                    // operation = button.id
                }
            } else if (button.id == '=') { // when we press the = button
                if (current_val !== null) {
                    if (operation) {
                        // console.log(prev_val, current_val, operation)
                        prev_val = operate(prev_val, current_val, operation)
                        update_answer(Math.round(prev_val * 100) / 100)
                        current_val = null;
                        disable_buttons()
                    }

                }
            } else if (button.id === 'clear') { // if we press the clear button
                current_val = null;
                prev_val = 0;
                disp_val = '';
                // disp_div.textContent = '';
                ans_div.textContent = '';
                enable_buttons()

            } else if (button.id === 'delete') { // if we press the delete button
                disp_val = delete_str(disp_val);
                current_val = disp_val;
                enable_buttons()

            } else { // if we're pressing numbers
                // numbers_pressed += button.id
                converted_id = id_converter(button.id)
                disp_val += converted_id;
                if (current_val === null) {
                    current_val = converted_id;
                } else {
                    current_val = current_val.toString() + converted_id
                }
                if (button.id === "decimal") {
                    disable_decimal()
                }

                // console.log("current val is:" + current_val)
            }
            disp_div.textContent = disp_val;
        });
    });
}

calculator()