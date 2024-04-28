class Solution {

    twoSum(nums, target) {
        const sortedNumbs = [...nums].sort((a, b) => a - b);
        let i = 0;
        let j = sortedNumbs.length - 1;
        if (sortedNumbs.length === 1 && target == sortedNumbs[0]) {
            return [0]
        }
        let arr;
        while (i !== j) {
            const sum = sortedNumbs[i] + sortedNumbs[j];
            if (target === sum) {
                let result = [];
                for (let k = 0; k < nums.length; k++) {
                    if (result.length == 2) {
                        break
                    }
                    if (nums[k] === sortedNumbs[i] || nums[k] === sortedNumbs[j]) {
                        result.push(k)
                    }
                }
                return result
            } if (sum > target) {
                j--
            } else {
                i++
            }
        }
    }

}

const data = new Solution().twoSum([6, -1, 3, 4], 5);
console.log(data);