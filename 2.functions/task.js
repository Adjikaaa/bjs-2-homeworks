// Задание 1
function getArrayParams([...arr]) {
    let sum = 0;
    let avg = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
        avg = (sum / arr.length).toFixed(2);
        avg = Number(avg);
    return {
        min: min,
        max: max,
        avg: avg
    };
}

// Задание 2
function worker([...arr]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function makeWork(arrOfArr, func) {
    let max = func(arrOfArr[0]);
    for (let i = 0; i < arrOfArr.length; i++) {
      let resultOfFunc = func(arrOfArr[i]);
         if (resultOfFunc > max) {
         max = resultOfFunc;
         }
    }
    return max;
}

// Задание 3
function worker2([...arr]) {
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
};
