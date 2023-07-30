// https://practice.geeksforgeeks.org/problems/fascinating-number3751/1?page=3&difficulty[]=-2&sortBy=submissions

class Solution {
    fascinating(N){
       const data=(N.toString()).concat((N*2).toString()).concat((N*3).toString());
      let arr=data.split('');
      console.log(arr);
      let array=['1','2','3','4','5','6','7','8','9']
      for(let i=0; i<arr.length;i++){
        array=  array.filter(item=>item !==arr[i])
      }
      if(array.length ===0 && arr.length ===9){
          return true
      }else{
          return false
      }
    }
}

new Solution().fascinating(817)