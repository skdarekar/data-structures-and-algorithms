// algorithm
/*
    1. start = 0, end = array.length, mid = (start+end) / 2
    2. Compare mid element with searchEle
    3. If equal then stop search
    4. Else check if searchEle is < mid ele if yes go to step 5 else go to step 6
    5. Update end equal to mid - 1
    6. Update start equal to mid + 1
    7. Find new mid = (start+end) / 2
    8. Repeat steps 2 to 7 until start < end else go to step 9
    9. Print result
    10. Stop
*/
// binary search function
function binarySearch(list, searchEle) {
    let start, end, mid, resultIndex;
    if (!list || list.length <= 0) {
        return null;
    }
    start = 0;
    end = list.length ;
    mid = Math.floor((start + end) / 2);
    console.log("Initial mid:", mid);
    while (start <= end) {
        if (list[mid] === searchEle) {
            resultIndex = mid;
            break;
        }
        if (searchEle < list[mid]) {
            end = mid - 1;
        } else if (searchEle > list[mid]) {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
        console.log("MID:", mid);
    }
    return resultIndex ?? null;
}

let list = [20, 23, 24, 21, 22, 54, 12];
let searchElement = 43;
list.sort();
console.log(list);
const index = binarySearch(list, searchElement);
if (index != null) {
    console.log("Search element found at position: " + (index + 1) + " element: " + list[index]);
} else {
    console.log("Search element not found: " + searchElement);
}