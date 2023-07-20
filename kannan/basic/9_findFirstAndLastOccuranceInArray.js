// https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions


class Solution {
    find(arr, n, x) {
        let output = "", start, last;
        if (arr.includes(x)) {
            start = arr.indexOf(x);
            for (let i = n; i > 0; i--) {
                if (arr[i - 1] == x) {
                    last = i - 1;
                    output = start + ' ' + last;
                    break;
                }
            }
        }
        else {
            output = -1 + " " + -1;
        }
        console.log(output);
        return [output];
    }
}
new Solution().find([1, 1], 2, 2);