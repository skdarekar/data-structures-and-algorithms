/* 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/
function runningSum(nums) {
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            sums[i] = nums[i];
        } else {
            sums[i] = sums[i - 1] + nums[i];
        }
    }
    return sums;
}

const arr = [1, 2, 3, 4, 5];
const sums = runningSum(arr);
console.log("Running sum of ", arr, " is ", sums);