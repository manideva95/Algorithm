// https://practice.geeksforgeeks.org/problems/second-largest3735/1/?page=1&difficulty[]=-2&sortBy=submissions 



class Solution {
    print2largest(arr, n) {
        let result;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        if (arr.length == 1) {
            result = -1
            return false
        }

        if (arr.length > 1) {
            for (let ind = 0; ind < arr.length; ind++) {
                const el = arr[ind];
                if (el > arr[ind + 1]) {
                    result = arr[ind + 1]
                    break;
                }
                if (ind == (arr.length - 1)) {
                    result = -1
                }
            }
        }
        return result
    }
}

let result = new Solution()
result.print2largest([35, 35, 34])
