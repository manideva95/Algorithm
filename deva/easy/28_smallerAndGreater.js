//https://practice.geeksforgeeks.org/problems/smaller-and-larger4005/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

class Solution {
    getMoreAndLess(arr, n, x) {
        //code here
        let lesserThan = []
        let greaterThan = []
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            if (el <= x) {
                lesserThan.push(el)
            } else if (el > x) {
                greaterThan.push(el)
            }
        }

        let result = lesserThan.length + "" + greaterThan.length;
        // console.log(result)
        return result
    }
}

new Solution().getMoreAndLess([1, 2, 8, 10, 11, 12, 19], 7, 5)
