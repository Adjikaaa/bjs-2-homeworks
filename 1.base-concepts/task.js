 'use strict'
function solveEquation(a, b, c) {
  	 		let D = Math.pow(b,2)-4*a*c;
		let solution = [];
		if (D==0) {
		  solution.push(-b/(2*a));
		} else if (D>0) {
		  solution.push(Number(((-b+Math.sqrt(D))/(2*a))));
		  solution.push(Number((-b-Math.sqrt(D))/(2*a)));
				} 
		return solution;
	
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
