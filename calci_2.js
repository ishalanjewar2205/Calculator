// Cache the display element once globally
const display = document.getElementById('display');

// Appends values onto the display screen
function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

// Clears the entire display screen
function clearDisplay() {
    display.value = '';
}

// Deletes just the last character from the end of the string
function deleteLast() {
    if (display.value === 'Error') {
        display.value = '';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Evaluates the mathematical string securely wrapped in a try/catch error safety net
function calculate() {
    try {
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}