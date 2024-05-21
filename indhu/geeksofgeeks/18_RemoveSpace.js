// https://practice.geeksforgeeks.org/problems/remove-spaces0128/1?page=2&difficulty[]=-2&sortBy=submissions

class Solution{
    modify(s){
     const data=  s.split('').filter(item=>item.replace(' ','')).join('');
     console.log(data);
     return data;
    }
}

new Solution().modify("geeks               for geeks")