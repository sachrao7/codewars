/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // brute force method

    // let sum = 0
    // let result = []

    // for (let i=0; i<nums.length; i++) {
    //     for (let j=i+1; j<nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i,j]
    //         }
    //     }
    // }

    //hash map method

    let counter = {}
    for (let i=0; i<nums.length; i++) {
        diff = target - nums[i]
        if (diff in counter) {
            return [counter[diff],i]
        }
        counter[nums[i]]=i
    }
};
