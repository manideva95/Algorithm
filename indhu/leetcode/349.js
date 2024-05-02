class Solution {
    fn(nums, target) {
        if (nums.length === 4) {
            if (nums[0] + nums[1] + nums[2] + nums[3] == target) {
                return [nums]
            } else {
                return []
            }
        }
        nums.sort((a, b) => a - b);

        const res = [];

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
                break;
            }

            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }

                let left = j + 1,
                    right = nums.length - 1;
                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum === target) {
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
                    }
                    if (sum <= target) {
                        while (nums[left] === nums[++left]);
                    } else {
                        while (nums[right] === nums[--right]);
                    }
                }
            }
        }
        return res;
    }
}

const data = new Solution().fn([-2, -1, -1, 1, 1, 2, 2], 0);
console.log(data);


// 40
// 1:15
