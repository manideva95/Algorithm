// https://practice.geeksforgeeks.org/problems/palindrome0746/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    is_palindrome(n){
        let result='No';
            const data = String(n).split('').reverse().join('', ',');
            if (data === String(n)) {
                result = 'Yes'
            }
        console.log(result);
        return result
    }
}
new Solution().is_palindrome(121);