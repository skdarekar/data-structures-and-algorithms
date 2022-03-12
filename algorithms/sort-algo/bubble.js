// sort array using bubble sort algorithm
function bubbleSort(arr) {
    let excecutionCount = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //swap the elements
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            excecutionCount++;
        }
    }
    console.log("Number of iterations:", excecutionCount);

    console.log("Sorted array: ", arr);
}

let arr = [1, 3, 2, 5, 3, -1];
bubbleSort(arr);