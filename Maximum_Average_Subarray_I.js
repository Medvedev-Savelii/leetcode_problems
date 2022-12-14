/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
     let n = nums.length;

    let mx = -Infinity;    // max
    let su = 0;            // sum

    for (let i = 0; i < n; i++) {
        su += nums[i];
        if (i >= k - 1) {
            if (su > mx) mx = su;
            su -= nums[i - (k - 1)];
        }
    }
    return mx / k;
};
