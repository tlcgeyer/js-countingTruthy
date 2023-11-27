document.addEventListener('DOMContentLoaded', function () {
    
    const booleanArray = [true, false, true, false, true, true, false];

    const countTrueValues = booleanArray.filter(value => value === true).length;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Count of True Values: ${countTrueValues}`;
});
