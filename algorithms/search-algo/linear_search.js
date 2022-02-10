// Linear search algorithm - simple implementation
function linearSearch(list, searchItem) {
    if (list && list.length === 0) {
        return null;
    }
    let foundIndex = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === searchItem) {
            foundIndex = i;
            break;
        }
    }
    return foundIndex ?? null;
}

const itemsArray = [20, 23, 24, 21, 22, 54, 12];
let searchElement = 54;

const index = linearSearch(itemsArray, searchElement);
if (index != null) {
    console.log("Search element found at position: " + (index + 1) + " element: " + itemsArray[index]);
} else {
    console.log("Search element not found: " + searchElement);
}