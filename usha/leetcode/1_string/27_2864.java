// https://leetcode.com/problems/maximum-odd-binary-number/

class Solution {
    public String maximumOddBinaryNumber(String s) {
    int one=0,zero=0;
        for(char str:s.toCharArray()){
            if(str=='1'){
                one++;
            }
        }
        zero=s.length()-one;
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<one-1;i++){
            sb.append('1');
        }
        for(int j=0;j<zero;j++){
            sb.append('0');
        }
        sb.append('1');
        return sb.toString();
}
}