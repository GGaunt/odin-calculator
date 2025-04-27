let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let value = button.textContent;

        if (!isNaN(value) || value === ".") {
            handleNumber(value);
        } else if (value === "C") {
            clearDisplay();
        } else if (value === "DEL") {
            deleteLastDigit();
        } else if (value === "=") {
            calculateResult();
        } else {
            handleOperator(value);
        }
    });
});

function handleNumber(number) {
    if (display.textContent === "0" || resultDisplayed) {
        display.textContent = number;
        resultDisplayed = false;
    } else {
        display.textContent += number;
    }
}

function handleOperator(op) {
    if (firstNumber === "") {
        firstNumber = display.textContent;
        operator = op;
        display.textContent = "0";
    }
}

function calculateResult() {
    if (firstNumber !== "" && operator !== "") {
        secondNumber = display.textContent;
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
        }

        display.textContent = result;
        firstNumber = "";
        secondNumber = "";
        operator = "";
        resultDisplayed = true;
    }
}

function clearDisplay() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function deleteLastDigit() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
        display.textContent = "0";
    }
}
