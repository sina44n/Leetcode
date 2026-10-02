/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let result = []

    for(i=0; i<nums.length; i++){

        if(!result.includes(nums[i])){
            result.push(nums[i])

        }
    }


    for(j=0; j<result.length; j++){
        nums[j] = result[j]
    }

    

    return result.length
};