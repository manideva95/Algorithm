class Solution {

    fn(nums, target) {

        nums.sort((a, b) => a - b);
        let n = nums[0] + nums[1] + nums[2];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                console.log(n);
                let total = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - total) < Math.abs(target - n)) {
                    n = total;;
                }
                if (total < target) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return n;
    }

}

const data = new Solution().fn([1, 0, -1, 0, -2, 2, -3, -1], 0);
console.log(data);