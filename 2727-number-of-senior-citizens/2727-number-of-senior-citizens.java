class Solution {
    public int countSeniors(String[] details) {
        int cnt = 0;
        for (String detail : details) {
            int age = Integer.parseInt(detail.substring(detail.length()-4, detail.length()-2));
            if (age > 60)
                cnt++;
        }
        return cnt;
    }
}