class Solution {

    fn(nums) {

        let res = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let total = nums[i] + nums[j] + nums[k];
                if (total > 0) {
                    k--;
                } else if (total < 0) {
                    j++;
                } else {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while (nums[j] === nums[j - 1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return res;


        let i = 0
        let j = 1
        let k = nums.length - 1
        let result = []
        while (i !== nums.length - 1) {
            if (j !== nums.length - 1) {
                if (k !== nums.length) {
                    console.log([nums[i], nums[j], nums[k]]);
                    if (nums[k] + nums[j] + nums[i] == 0) {
                        result.push([nums[i], nums[j], nums[k]]);
                        j++;
                        k = j + 1;
                    } else {
                        k++
                    }
                } else {
                    j++;
                    k = j + 1;
                }
            } else {
                i++;
                j = i + 1;
                k = j + 1;
            }
        }

        return result;
    }

}

const data = new Solution().fn([1, 0, -1, 0, -2, 2]);
console.log(data);