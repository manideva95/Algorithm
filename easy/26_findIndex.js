//https://practice.geeksforgeeks.org/problems/find-index4752/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions
class Solution {
    findIndex(a, n, key) {
        //code here
        let result = []
        let first = false;
        let second = false;
        for (let i = 0; i < a.length; i++) {
            const el = a[i];

            //for start index 
            if (el == key && !first) {
                result[0] = (i)
                first = true
            }


            //for end index
            const el2 = a[(a.length - 1) - i]
            if (el2 == key && !second) {
                result[1] = ((a.length - 1) - i)
                second = true
            }

        }
        // console.log(result)
        if (result.length) {
            if (result[0] < 0 && result[0] != null) {
                result[0] = -1
            }
            if (result[1] < 0 && result[1] != null) {
                result[1] = -1
            }
        } else {
            result = [-1, -1]
        }
        // console.log(result)
        return result
    }
}

new Solution().findIndex([1, 2, 3, 4, 5, 5], 6, 5)
// new Solution().findIndex([21, 10, 16, 12, 18, 18, 30, 23, 12, 28], 6, 5)

