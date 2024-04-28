class Solution {

    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        if (numbers.length === 1 && target == numbers[0]) {
            return [0]
        }
        while (i !== j) {
            const sum = numbers[i] + numbers[j];
            if (target === sum) {
                return [i + 1, j + 1]
            } if (sum > target) {
                j--
            } else {
                i++
            }
        }
    }

}

const data = new Solution().twoSum([2, 7, 15, 11], 9);
console.log(data);