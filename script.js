/* =========================================
   ELEMENTS
========================================= */

const display =
    document.getElementById("display");

const expression =
    document.getElementById("expression");

const buttons =
    document.querySelector(".buttons");

const historyList =
    document.getElementById("historyList");

const clearHistoryButton =
    document.getElementById("clearHistory");

const themeButton =
    document.getElementById("themeButton");


/* =========================================
   CALCULATOR VARIABLES
========================================= */

let currentValue = "0";

let previousValue = null;

let selectedOperator = null;

let waitingForValue = false;

let justCalculated = false;


/* =========================================
   HISTORY
========================================= */

let calculationHistory =
    JSON.parse(
        localStorage.getItem("calculatorHistory")
    ) || [];


/* =========================================
   UPDATE DISPLAY
========================================= */

function updateDisplay() {

    display.textContent =
        currentValue;

}


/* =========================================
   NUMBER INPUT
========================================= */

function inputNumber(number) {

    if (currentValue === "Error") {

        clearCalculator();

    }


    if (
        waitingForValue ||
        justCalculated
    ) {

        currentValue = number;

        waitingForValue = false;

        justCalculated = false;

    }

    else if (currentValue === "0") {

        currentValue = number;

    }

    else {

        currentValue += number;

    }


    updateDisplay();

}


/* =========================================
   DECIMAL
========================================= */

function inputDecimal() {

    if (currentValue === "Error") {

        clearCalculator();

    }


    if (
        waitingForValue ||
        justCalculated
    ) {

        currentValue = "0.";

        waitingForValue = false;

        justCalculated = false;

    }

    else if (!currentValue.includes(".")) {

        currentValue += ".";

    }


    updateDisplay();

}


/* =========================================
   OPERATOR
========================================= */

function chooseOperator(operator) {

    if (currentValue === "Error") {
        return;
    }


    if (
        selectedOperator &&
        !waitingForValue
    ) {

        calculateResult();

    }


    previousValue =
        parseFloat(currentValue);

    selectedOperator =
        operator;

    waitingForValue = true;

    justCalculated = false;


    expression.textContent =
        `${formatNumber(previousValue)}
         ${operatorSymbol(operator)}`;

}


/* =========================================
   CALCULATE
========================================= */

function calculateResult() {

    if (
        selectedOperator === null ||
        previousValue === null
    ) {

        return;

    }


    const currentNumber =
        parseFloat(currentValue);


    let result;


    switch (selectedOperator) {

        case "+":

            result =
                previousValue +
                currentNumber;

            break;


        case "-":

            result =
                previousValue -
                currentNumber;

            break;


        case "*":

            result =
                previousValue *
                currentNumber;

            break;


        case "/":

            if (currentNumber === 0) {

                currentValue = "Error";

                expression.textContent =
                    "Cannot divide by zero";

                previousValue = null;

                selectedOperator = null;

                updateDisplay();

                return;

            }


            result =
                previousValue /
                currentNumber;

            break;

    }


    const formattedResult =
        formatNumber(result);


    const fullExpression =
        `${formatNumber(previousValue)}
         ${operatorSymbol(selectedOperator)}
         ${formatNumber(currentNumber)}`;


    expression.textContent =
        `${fullExpression} =`;


    currentValue =
        formattedResult;


    /* SAVE HISTORY */

    addToHistory(
        fullExpression,
        formattedResult
    );


    previousValue = null;

    selectedOperator = null;

    waitingForValue = false;

    justCalculated = true;


    updateDisplay();

}


/* =========================================
   FORMAT NUMBER
========================================= */

function formatNumber(number) {

    if (!Number.isFinite(number)) {

        return "Error";

    }


    return String(
        Number(
            Number(number).toFixed(10)
        )
    );

}


/* =========================================
   OPERATOR SYMBOL
========================================= */

function operatorSymbol(operator) {

    const symbols = {

        "+": "+",

        "-": "−",

        "*": "×",

        "/": "÷"

    };


    return symbols[operator];

}


/* =========================================
   CLEAR CALCULATOR
========================================= */

function clearCalculator() {

    currentValue = "0";

    previousValue = null;

    selectedOperator = null;

    waitingForValue = false;

    justCalculated = false;

    expression.textContent = "";

    updateDisplay();

}


/* =========================================
   BACKSPACE
========================================= */

function backspace() {

    if (
        currentValue === "Error" ||
        waitingForValue ||
        justCalculated
    ) {

        clearCalculator();

        return;

    }


    if (currentValue.length <= 1) {

        currentValue = "0";

    }

    else {

        currentValue =
            currentValue.slice(0, -1);

    }


    updateDisplay();

}


/* =========================================
   PERCENTAGE
========================================= */

function percentage() {

    if (currentValue === "Error") {
        return;
    }


    const number =
        parseFloat(currentValue);


    currentValue =
        formatNumber(number / 100);


    updateDisplay();

}


/* =========================================
   ADD HISTORY
========================================= */

function addToHistory(
    calculation,
    result
) {

    const historyItem = {

        calculation: calculation,

        result: result,

        time: new Date().toLocaleTimeString()

    };


    calculationHistory.unshift(
        historyItem
    );


    /* Keep only latest 30 */

    calculationHistory =
        calculationHistory.slice(0, 30);


    saveHistory();

    displayHistory();

}


/* =========================================
   SAVE HISTORY
========================================= */

function saveHistory() {

    localStorage.setItem(
        "calculatorHistory",
        JSON.stringify(
            calculationHistory
        )
    );

}


/* =========================================
   DISPLAY HISTORY
========================================= */

function displayHistory() {

    historyList.innerHTML = "";


    if (calculationHistory.length === 0) {

        historyList.innerHTML = `
            <p class="empty-history">
                No calculations yet
            </p>
        `;

        return;

    }


    calculationHistory.forEach(
        (item, index) => {

            const historyItem =
                document.createElement("div");


            historyItem.className =
                "history-item";


            historyItem.innerHTML = `

                <div
                    class="history-expression"
                    title="${item.calculation}">
                    ${item.calculation}
                </div>

                <div class="history-result">
                    = ${item.result}
                </div>

                <button
                    class="delete-history"
                    data-index="${index}"
                    aria-label="Delete calculation">
                    ×
                </button>

            `;


            /*
             * Clicking the history calculation
             * puts the result back into display.
             */

            historyItem.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target.classList
                            .contains("delete-history")
                    ) {

                        return;

                    }


                    currentValue =
                        item.result;

                    previousValue = null;

                    selectedOperator = null;

                    waitingForValue = false;

                    justCalculated = true;


                    expression.textContent =
                        `${item.calculation} =`;


                    updateDisplay();

                }
            );


            historyList.appendChild(
                historyItem
            );

        }
    );

}


/* =========================================
   DELETE INDIVIDUAL HISTORY
========================================= */

historyList.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.classList
                .contains("delete-history")
        ) {

            return;

        }


        const index =
            Number(
                event.target.dataset.index
            );


        calculationHistory.splice(
            index,
            1
        );


        saveHistory();

        displayHistory();

    }
);


/* =========================================
   CLEAR ALL HISTORY
========================================= */

clearHistoryButton.addEventListener(
    "click",
    function() {

        if (
            calculationHistory.length === 0
        ) {

            return;

        }


        calculationHistory = [];


        localStorage.removeItem(
            "calculatorHistory"
        );


        displayHistory();

    }
);


/* =========================================
   BUTTON CLICK
========================================= */

buttons.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const value =
            button.dataset.value;

        const action =
            button.dataset.action;


        if (value !== undefined) {

            if (
                value >= "0" &&
                value <= "9"
            ) {

                inputNumber(value);

            }

            else {

                chooseOperator(value);

            }

            return;

        }


        switch (action) {

            case "clear":

                clearCalculator();

                break;


            case "backspace":

                backspace();

                break;


            case "percent":

                percentage();

                break;


            case "decimal":

                inputDecimal();

                break;


            case "calculate":

                calculateResult();

                break;

        }

    }
);


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const key = event.key;


        if (
            key >= "0" &&
            key <= "9"
        ) {

            inputNumber(key);

            return;

        }


        if (key === ".") {

            inputDecimal();

            return;

        }


        if (
            key === "+" ||
            key === "-" ||
            key === "*" ||
            key === "/"
        ) {

            chooseOperator(key);

            return;

        }


        if (
            key === "Enter" ||
            key === "="
        ) {

            event.preventDefault();

            calculateResult();

            return;

        }


        if (key === "Backspace") {

            backspace();

            return;

        }


        if (
            key === "Escape" ||
            key.toLowerCase() === "c"
        ) {

            clearCalculator();

            return;

        }


        if (key === "%") {

            percentage();

        }

    }
);


/* =========================================
   THEME
========================================= */

themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList
                .contains("dark");


        themeButton.textContent =
            dark ? "☾" : "☀";

    }
);


/* =========================================
   LOAD HISTORY ON START
========================================= */

displayHistory();

updateDisplay();

