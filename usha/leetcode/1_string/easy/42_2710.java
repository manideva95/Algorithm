// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

public class Solution {
    public static String removeTrailingZeros(String num) {
        String result = null;
        for(int i=num.length()-1; i>=0 ; i--){
            if(num.charAt(i)!= '0'){
                result = num.substring(0,i+1);
                break;
            }
        }
        return result;
    }
    public static void main(String[] args){
        System.out.println("TrailZero_2710:"+ Solution.removeTrailingZeros("123"));
    }
}

//other approach
//public String removeTrailingZeros(String num) {
//
//    int i = num.length() - 1;
//    while (i >= 0 && num.charAt(i) == '0') {
//        i--;
//    }
//    return num.substring(0, i + 1);
//}
//Time Complexity: o(n)
