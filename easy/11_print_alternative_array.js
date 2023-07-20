// https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1/?page=1&difficulty[]=-2&sortBy=submissions
class Solution {
    print(arr, n) {
        let result;
        arr.forEach((el, ind) => {
            if (ind % 2 == 0) {
                result = result ? result + " " + el : el
            }
        })
        console.log(result)
    }
}

let result = new Solution()
result.print([1, 2, 3, 4, 5])



function printAlternateNumber(arr) {

}

console.log(printAlternateNumber([1, 2, 3, 4, 5]))