// https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution{
    printNos(N){
        if(N>9){
            this.printNos(N-1);
        }
       return N
    }
}

new Solution().printNos(10)