// Find the Kth smallest number in an array
function findKthSmall(arr, k) {
    if (arr.length < k) {
        return null;
    }
    sort(arr, k);
    return arr[k - 1];
}

function sort(arr, k) {
    for (let i = 0; i < k; i++) {
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


const arr = [1, 2, 3, 45, 5, 66, -21231];
let k = 1;
const kthSmall = findKthSmall(arr, k);
console.log(k + "th smallest element is " + kthSmall);