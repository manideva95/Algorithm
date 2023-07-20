// https://practice.geeksforgeeks.org/problems/area-of-rectange-right-angled-triangle-and-circle2600/1?page=5&difficulty[]=-2&sortBy=submissions

class Solution {
    getAreas(L, W, B, H, R) {
        let rec, tri, cir, output = "";
        rec = L * W;
        tri = Math.floor(0.5 * (B * H));
        cir = Math.floor(3.14 * Math.pow(R, 2));
        //   console.log(rec,tri,cir);
        output = output + rec + " " + tri + " " + cir;
        return [output];
    }
}
new Solution().getAreas(32, 32, 54, 12, 52);