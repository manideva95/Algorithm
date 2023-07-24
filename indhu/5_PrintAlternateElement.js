// https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    print(arr, n) {
        const data=[]
        let j=0;
        for (let i = 0; i < arr.length; i++) {
            if (!(i % 2)) {
                data[j]=(arr[i]);
            j++;
            }
        }
        console.log(data);
        return arr.filter((item, index) => !(index % 2))
    }
}

new Solution().print([1, 2, 3, 3, 4, 5, -5], 4)