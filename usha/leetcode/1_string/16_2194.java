// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

class Solution {
    public List<String> cellsInRange(String s) {
         List<String> resultStr = new ArrayList<>();
        for(char col=s.charAt(0); col<=s.charAt(3);col++){
            for(char row=s.charAt(1);row<=s.charAt(4);row++){
                // resultStr.add(""+col+row);
                 resultStr.add(new StringBuilder().append(col).append(row).toString());
            }
        }
        return resultStr;
    }
}

