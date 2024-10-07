// https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

public class Solution {
    public static boolean squareIsWhite(String coordinates) {
        int x = coordinates.charAt(0)- 'a';
        int y = coordinates.charAt(1)-'0';

        if(x%2 != 0 && y%2 != 0){
            return true;
        }
        else if(x%2 == 0 && y%2 == 0){
            return true;
        }
        return false;
    }
    public static void main(String[] args){
        System.out.println("squareIsWhite:"+  Solution.squareIsWhite("a2"));
    }
}