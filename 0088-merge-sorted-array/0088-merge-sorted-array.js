/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let arra = nums1.slice(0,m)

    arra = arra.concat(nums2)

    arra.sort((a,b) => a-b)


    for(i=0; i<arra.length; i++){

        nums1[i] = arra[i]
 
    }
    
};