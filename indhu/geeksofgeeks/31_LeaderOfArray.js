class Solution {
    // Function to check if given number n is a power of two.
    isPowerofTwo(arr) {
      
        const data = arr.filter((item,index)=> item > arr[index+1] );
        data.push(arr[arr.length -1])
       return data
    }
}

const resp = new Solution().isPowerofTwo([16,17,4,3,5,2]);

console.log(resp);