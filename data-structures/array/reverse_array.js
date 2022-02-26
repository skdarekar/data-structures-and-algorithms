// Reverse the array without using new array
// in-place
function reverseArray(array) {
    console.log("Original Array:", array);
    let i = 0;
    let j = array.length - 1;
    let temp;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++; j--;
    }
    console.log("Reveresed Array:", array);
}

const arr = [1, 2, 3, 4, 5, 6];
reverseArray(arr);