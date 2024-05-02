class Solution {

    fn(nums, val) {
        nums.sort((a, b) => a - b)
        let i = nums[Math.round((nums.length - 1) / 2)] >= val ? 0 : Math.round((nums.length - 1) / 2);
        let j = nums.length - 1;
        while (i <= j) {
            if (nums[i] === val || nums[j] === val) {
                if (nums[i] === val) {
                    nums.splice(i, 1)
                }
                if (nums[j] === val) {
                    nums.splice(j, 1)
                }
            } else {
                i++;
                j--;
            }

        }
        return nums.length
    }

}

const data = new Solution().fn([3, 2, 2, 3], 2);
console.log(data);