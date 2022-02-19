// find min element from array
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
//find max element from array
function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [1, 2, -11, 23, 423, 22];
console.log("Min element from array: " + findMin(arr));
console.log("Max element from array: " + findMax(arr));