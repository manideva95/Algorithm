// https://practice.geeksforgeeks.org/problems/swap-kth-elements5500/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    swapKth(arr,n,k){
        const a=arr[n-k];
        const b =arr[k-1]
        arr[k-1]=a;
        arr[n-k]=b;
        console.log(arr);
        return arr
    }
}
new Solution().swapKth([ 2],1,1)