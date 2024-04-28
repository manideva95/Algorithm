class Solution {

    twoSum(numbers) {
        let area = 0;
        let i = 0;
        let j = numbers.length - 1;

        while (i < j) {
            area = Math.max(area, Math.min(numbers[j], numbers[i]) * (j - i));
            if (numbers[i] <= numbers[j]) {
                ++i;
            }
            else {
                --j;
            }
        }
        return area;
    }

}

const data = new Solution().twoSum([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(data);