//Earning Amount and Pocket Money function
function getValue(input) {
    const inputField = document.getElementById(input);
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    return inputValue;
}
// Earning Amount and Pocket Money calculate.
document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('income');
    const meal = getValue('meal');
    const pay = getValue('pay');
    const clothing = getValue('clothing');

    // Error alert.
    if (income < 0 || meal < 0 || pay < 0 || clothing < 0) {
        alert('Please enter your positive Amount!!!');
    }
    else {
        //Pocket Money add
        const cost = meal + pay + clothing;
        document.getElementById('pocket-money').innerText = cost;
        document.getElementById('total-balance').innerText = income - cost;
    }
});