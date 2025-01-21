// // https://leetcode.com/problems/palindrome-partitioning/description/

// var partition = function (s) {
//     const isPalindrome = (sub) => {
//         let left = 0, right = sub.length - 1;
//         while (left < right) {
//             if (sub[left++] !== sub[right--]) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     const partitions = [];

//     const backtrack = (start, path) => {
//         if (start === s.length) {
//             partitions.push([...path]);
//             return;
//         }
//         console.log(path);

//         for (let end = start + 1; end <= s.length; end++) {
//             const sub = s.substring(start, end);
//             if (isPalindrome(sub)) {
//                 path.push(sub);
//                 backtrack(end, path);
//                 path.pop();
//             }
//         }
//     };

//     backtrack(0, [], partitions);
//     return partitions;
// };

// console.log(partition("aaab"))

"use strict"
{
    function abt() {
        console.log('asdf');

    }
}
abt();