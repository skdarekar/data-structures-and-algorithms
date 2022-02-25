// Find the element with max occurrences in the array
// input arr = [1, 2, 3, 1, 2, 3, 1, 4, 1] 
// output - 1 (because 1 occurs 4 time in given array)

function findMaxOccurrence(arr) {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]]) {
            dict[arr[i]] += 1;
        } else {
            dict[arr[i]] = 1;
        }
    }

    let keys = Object.keys(dict);
    let max = dict[keys[0]];
    let element = keys[0];

    for (let i = 1; i < keys.length; i++) {
        if (max < dict[keys[i]]) {
            max = dict[keys[i]];
            element = keys[i];
        }
    }
    console.log(element + " is occured max times in array: ", arr);
    return element;
}

const arr = [2, 2, 3, 1, 2, 3, 1, 4, 1];
findMaxOccurrence(arr);