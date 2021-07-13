window.onload = () => document.querySelector('.custom-control-input').checked = false;

class BMICalculator {

    /**
     * Is imperial system activated?
     * @memberof BMICalculator
     */
    isImperial = false

    /**
     * Units.
     * @memberof BMICalculator
     */
    units = { height: '', weight: '' }

    /**
     * Calculation result.
     * @memberof BMICalculator
     */
    result

    constructor() {}

    /**
     * Change system (Metric <-> Imperial).
     * @memberof BMICalculator
     */
    changeSystem() {
        this.isImperial = !this.isImperial;

        if (this.isImperial) {
            this.units.height = 'IN',
            this.units.weight = 'LB'
        }
        else {
            this.units.height = 'CM',
            this.units.weight = 'KG'
        }
    }

    /**
     * Calculate BMI.
     * @memberof BMICalculator
     */
    calculateBMI(height, weight) {
        this.isImperial
        ? this.result = ((weight * 703) / Math.pow(height, 2)).toFixed(2)
        : this.result = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
    }
}

const bmiCalculator = new BMICalculator();

document.querySelector('.custom-control-input').addEventListener('click', () => {
    bmiCalculator.changeSystem();
    document.querySelector('.text-height').innerText = bmiCalculator.units.height;
    document.querySelector('.text-weight').innerText = bmiCalculator.units.weight;
});

document.querySelector('.btn-calculate').addEventListener('click', () => {
    bmiCalculator.calculateBMI(document.querySelector('[data-height]').value, document.querySelector('[data-weight]').value);

    if (bmiCalculator.result < 18.6) {
        document.querySelector('.result').innerHTML = `<span class="text-warning">${bmiCalculator.result}</span>`;
    }
    else if (bmiCalculator.result >= 18.6 && bmiCalculator.result < 24.9) {
        document.querySelector('.result').innerHTML = `<span class="text-success">${bmiCalculator.result}</span>`;
    }
    else {
        document.querySelector('.result').innerHTML = `<span class="text-danger">${bmiCalculator.result}</span>`;
    }
});