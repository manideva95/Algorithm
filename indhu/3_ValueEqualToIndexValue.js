// https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    valueEqualToIndex(arr,n){
        let data=[];
        for(let i =1; i<= arr.length; i++){
            if(arr[i-1] ===i){
                data.push(i)
            }
        }
        return data
    }
}

new Solution().valueEqualToIndex([2,2,5,6,1,6],6);
