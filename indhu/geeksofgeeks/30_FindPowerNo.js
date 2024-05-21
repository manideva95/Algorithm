class Solution {
    // Function to check if given number n is a power of two.
    isPowerofTwo(n) {
        // if (n !== 0) {
        //     if (n == 1 || n == 2) {
        //         return true
        //     } else {
        //         for (let i = 0; i <= n;) {
        //             if (Math.pow(2, i) === n) {
        //                 return true
        //             }
        //             console.log(Math.log(128)/Math.log(2));
        //             i = Math.pow(2, i);
        //         }
        //     }
        // }
        // console.log(Math.log(n) / Math.log(2));
const data = [1,2,3,4,4,5].concat([3,4,5,2,])

        // console.log(Array.from(new Set(data)));

        const duplicates =data.filter((item, index) =>data.indexOf(item) !== index); 
        return Array.from(new Set(duplicates)); 

        return Number.isInteger(Math.log(n) / Math.log(2)) 
       
    }
}

const resp = new Solution().isPowerofTwo(549755813888);

console.log(resp);