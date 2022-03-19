// Remove duplicates from an array in place
function removeDuplicates(arr) {
    // remove duplicates from array
    console.log("Original Array:", arr);
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == temp) {
                arr.splice(j, 1);
                // j - 1 because we removed one 
                // element from array in place
                j--;
            }
        }
    }
    console.log("After removing duplicates:", arr);
}

let arr = [1, 1, 1, 1, 1, 22, 2, 2, 2, 22, 2, 2, 1, 3, 2, 3, 1, 3, 2, 3, 4, 4, 4, 4, 4, 4, 4];

removeDuplicates(arr);