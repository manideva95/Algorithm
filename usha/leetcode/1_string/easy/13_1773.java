// https://leetcode.com/problems/count-items-matching-a-rule/

class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int count =0;
        int index =0;

        if(ruleKey.equals("color")){
         index=1;
        } else if(ruleKey.equals("name")) {
         index = 2;
        }

        for (int i=0; i< items.size();i++){
            if(items.get(i).get(index).equals(ruleValue)){
                count++;
            }
        }

    return  count;
// for (int i=0; i< items.size();i++){
//     List<String> item = items.get(i);

//     if(ruleKey.equals("type")){
//         if(item.get(0).equals(ruleValue)){
//             count++;
//         }
//     }else if(ruleKey.equals("color")){
//         if(item.get(1).equals(ruleValue)){
//             count++;
//         }
//     } else if(ruleKey.equals("name")){
//         if(item.get(2).equals(ruleValue)){
//             count++;
//         }
//     }
}
}