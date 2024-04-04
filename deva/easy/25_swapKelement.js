//https://practice.geeksforgeeks.org/problems/swap-kth-elements5500/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions
class Solution {
    swapKth(arr, n, k) {
        //code here
        let first = arr[k - 1]
        let second = arr[arr.length - (k)]
        arr[k - 1] = second
        arr[arr.length - (k)] = first
        console.log(arr)
    }
}

new Solution().swapKth([1, 2, 3, 4, 5, 6, 7, 8], 8, 3)