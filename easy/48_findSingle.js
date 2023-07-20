//https://practice.geeksforgeeks.org/problems/alone-in-couple5507/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    findSingle(n, arr) {
        //code here
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if (element == arr[j]) {
                    console.log(element, arr[j])
                    break
                } else if (element == arr[arr.length - 1]) {

                }
            }
        }
        return arr
    }
}

console.log(new Solution().findSingle(11, [1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6]));