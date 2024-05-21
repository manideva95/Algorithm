// https://practice.geeksforgeeks.org/problems/alone-in-couple5507/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution {
    findSingle(n, arr) {
        let duplicate = [];
        let count = 0;
        for (let j = 0; j < n; j++) {
            for(let i=0;i<n;i++){
            if(i!==j &&  arr[i]===arr[j]){
                duplicate[i]=arr[i]
            }
         }
        }
        for(let i=0;i<n;i++){
            if(duplicate[i]===undefined){
                count=arr[i]
            }
         }
       console.log(count);
       return count;
    }
}

new Solution().findSingle(7, [1, 2, 3, 2, 1,3,7])