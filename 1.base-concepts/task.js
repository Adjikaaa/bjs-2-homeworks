function solveEquation(a, b, c) {
  	  'use strict'
		let D = Math.pow(b,2)-4*a*c;
		let solution = [];
		if (D==0) {
		  solution.push(-b/(2*a));
		} else if (D>0) {
		  solution.push((((-b-Math.sqrt(D))/(2*a))).toFixed(2));
		  solution.push((((-b+Math.sqrt(D))/(2*a))).toFixed(2));
		} 
		return solution;
	
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
