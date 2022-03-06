// Move all negative elements to end
function moveNegative(arr) {
    console.log(arr);
    let cnt = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            for (let j = 0; j < arr.length - 1; j++) {
                cnt++;
                if (arr[j] < 0) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    console.log(arr);
    console.log("No of iterations:"+cnt);
}

let arr = [-1, -2, -1, -9];
moveNegative(arr);