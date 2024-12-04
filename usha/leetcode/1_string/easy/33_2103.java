// https://leetcode.com/problems/rings-and-rods/description/


class Solution {
    public int countPoints(String rings) {
        HashMap<Integer,String> map=new HashMap<>();
        int count=0;
        String temp="";
        for(int i=1;i<rings.length();i+=2){
            int index=rings.charAt(i)-48;
            if(map.containsKey(index)){
                temp=map.get(index);
                temp+=rings.charAt(i-1)+"";
                map.put(index,temp);
            }else {
                temp=rings.charAt(i-1)+"";
                map.put(index,temp);
            }
        }
        for(int i=0;i<10;i++){
            if(!map.containsKey(i)){
                continue;
            }
            String ringsCount=map.get(i);
            if(ringsCount.contains("R") && ringsCount.contains("G") && ringsCount.contains("B")){
                count++;
            }
        }
        return count;
    }
}