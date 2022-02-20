// Sort the given array(inplace)
function sortArray(arr) {
    console.log(arr);
    // console.log(arr.sort());
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            //swap the elements
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

let arr = [1, 2, -11, 23, 423, 22, 0];
sortArray(arr);
console.log("Sorted array: ", arr);