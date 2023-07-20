//https://practice.geeksforgeeks.org/problems/fascinating-number3751/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

class Solution {
    fascinating(N) {
        //code here

        // console.log(N.toString() + (N * 2).toString() + (N * 3).toString())
        let res = N.toString() + (N * 2).toString() + (N * 3).toString()
        if ('123456789' === res.split("").sort().join("")) {
            return true
        } else {
            return false
        }
    }
}

new Solution().fascinating(192)