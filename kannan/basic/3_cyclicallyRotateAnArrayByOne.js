// https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

class Solution {
    rotate(arr, n, x, y) {
        let a;
        a = n - 1;
        arr.unshift(arr[a]);
        console.log(arr);
        arr.pop();
        console.log(arr);
        return arr;
        // let a;
        // if (arr.find(element => element == x) && arr.find(element => element == y)) {
        //     console.log("one");
        //     a = Math.abs(arr.indexOf(y) - arr.indexOf(x));
        // }
        // console.log(a); minum distance 
    }
}
new Solution().rotate([86, 39, 90, 12, 84, 66, 42], 7, 42, 12); 