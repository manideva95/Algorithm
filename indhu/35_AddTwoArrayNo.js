class Solution {
    print(num1, num2) {
    const numb1 = parseInt(num1.join(''))+ parseInt(num2.join(''));
    console.log( (numb1.toString()).split('').reverse());
    }
}

new Solution().print([4, 1, 5, 1, 2, 5, 1, 5, 5, 4],[2,4])