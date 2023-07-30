// https://practice.geeksforgeeks.org/problems/sum-of-odd-and-even-elements3033/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution{
    find_sum(n){
        let e=n%2 ==0? n/2:Math.round(n/2)-1;
        let o=n%2==0? n/2: Math.round(n/2);
let result=[]
     result[1]=e*(e+1);
     result[0]=o**2
     console.log(result,e,o);
     return result;
    }
}

new Solution().find_sum(12)