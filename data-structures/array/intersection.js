/*
Approach/Psedocode - 
    1. Loop through the given list
    2. Find Max and Min from i'th and j'th tuple (p1, p2)
    3. If p1 <= p2 then there is intersection point, push intersection points(p1, p2) to seperate list
    4. Increment i and j and continue with next iteration.
    5. Print intersection points list
*/

// JavaScript implementation to find
// intersecting intervals
// Function to print intersecting intervals
function getIntersections(arr1, arr2) {
    let length1 = arr1.length;
    let length2 = arr2.length;
    let intersectionList = []
    for (let i = 0, j = 0; i < length1 && j < length2;) {
        let firstMax = findMax(arr1[i][0], arr2[j][0]);
        let secondMin = findMin(arr1[i][1], arr2[j][1]);
        if (firstMax <= secondMin) {
            intersectionList.push([firstMax, secondMin]);
        }
        arr1[i][1] < arr2[j][1] ? i++ : j++;
    }
    console.log(intersectionList)

}
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
function findMin(num1, num2) {
    return num1 < num2 ? num1 : num2;
}
let arr1 = [[1, 3], [5, 6], [7, 9]];
let arr2 = [[2, 3], [5, 7]];

getIntersections(arr1, arr2);
