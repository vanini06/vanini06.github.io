function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const displayValue = document.getElementById('display').value;
    let result;
    try {
        result = eval(displayValue); // Using eval for simplicity; consider safer alternatives for production
    } catch (error) {
        result = 'Erro!';
    }
    document.getElementById('display').value = result;
}
