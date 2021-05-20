const heightFormValue = document.querySelector('[data-height]');
const weightFormValue = document.querySelector('[data-weight]');
const calculateButton = document.querySelector('[data-calculate]');

function calculate() {
    return weightFormValue.value/Math.pow(heightFormValue.value / 100, 2);
}

calculateButton.addEventListener('click', () => {
    const result = calculate();
    alert(result);
});