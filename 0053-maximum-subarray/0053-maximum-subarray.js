/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (currentSum < 0) {
            currentSum = 0;
        }

        currentSum = currentSum + nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
};