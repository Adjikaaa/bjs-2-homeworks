// Задание 1
function getArrayParams([...arr]) {
    let sum = 0;
    let avg = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            min = min;
        }
        if (arr[i] > max) {
            max = arr[i];
        } else {
            max = max;
        }
        sum += arr[i];
        avg = (sum / arr.length).toFixed(2);
        avg = Number(avg);
    }
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
    let max = worker(arrOfArr[0]);
    for (let i = 0; i < arrOfArr.length; i++) {
        if (func(arrOfArr[i]) > max) {
            max = func(arrOfArr[i]);
        } else {
            max = max;
        }
    }
    return max;
}

// Задание 3
function worker2([...arr]) {
    let min = arr[0];
    let max = arr[0];
    let delta = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min < arr[i]) {
            min = min;
        } else {
            min = arr[i]
        }
        if (max > arr[i]) {
            max = max;
        } else {
            max = arr[i]
        }
    }
    delta = Math.abs(max - min);
    return delta;
}

function makeWork(arrOfArr, func) {
    let max = worker2(arrOfArr[0]);
    for (let i = 0; i < arrOfArr.length; i++) {
        if (func(arrOfArr[i]) > max) {
            max = func(arrOfArr[i]);
        } else {
            max = max;
        }
    }
    return max;
}
