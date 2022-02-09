'use strict'

function solveEquation(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let solution = [];
    if (D == 0) {
        solution.push(-b / (2 * a));
    } else if (D > 0) {
        solution.push(Number(((-b + Math.sqrt(D)) / (2 * a))));
        solution.push(Number((-b - Math.sqrt(D)) / (2 * a)));
    }
    return solution;

}

function calculateTotalMortgage(percent, contribution, amount, date) {
    console.log(percent);

    if (isNaN(percent))
        return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);

    if (isNaN(contribution))
        return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);

    if (isNaN(amount))
        return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);

    let S = amount - contribution;
    console.log(S);
    let now = new Date();
    console.log("NOW" + now);
    let elapsedInMonths = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));
    console.log(elapsedInMonths);
    let P = percent / 12 / 100;
    let payment = S * (P + (P / ((Math.pow((1 + P), elapsedInMonths) - 1))));
    console.log("P" + P);
    console.log(payment);
    let totalAmount = payment * elapsedInMonths;
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}