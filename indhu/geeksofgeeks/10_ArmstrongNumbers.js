// https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    armstrongNumber(n){
        const numbers = n.toString().split('');
        let sum=0;
        for(let i=0; i<numbers.length; i++ ){
          sum= parseInt(numbers[i])**3 +sum;
        }
        console.log(sum);
        return n==sum ? 'yes':'no';
    }
}

new Solution().armstrongNumber(370);