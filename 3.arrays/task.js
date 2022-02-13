// Задача 1
function compareArrays([...arr1], [...arr2]) {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr2.length; i++) {
            if (String(arr1[i]) === String(arr2[i])) {
                return true;
            } else false;
        }
    }
}


// Задача 2
function advancedFilter([...arr]) {

    let isPozitive = (element, index, arr) => element > 0;
    let isMultipleOfThree = (element, index, arr) => element % 3 == 0;
    let isMuliplyByTen = (element, index, arr) => element * 10;
    let resultArr = arr.filter(isPozitive).filter(isMultipleOfThree).map(isMuliplyByTen);
    return resultArr;
};
