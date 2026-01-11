
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<Boolean> camelMatch(String[] queries, String pattern) {
        List<Boolean> resultsCamelMatch = new ArrayList<>();
        for (var query : queries) {
            resultsCamelMatch.add(isCamelMatch(query.toCharArray(), pattern.toCharArray()));
        }
        return resultsCamelMatch;
    }

    private boolean isCapitalLetter(char letter) {
        return letter >= 'A' && letter <= 'Z';
    }

    private boolean isCamelMatch(char[] query, char[] pattern) {
        int indexPattern = 0;

        for (int i = 0; i < query.length; ++i) {
            if (indexPattern < pattern.length && query[i] == pattern[indexPattern]) {
                ++indexPattern;
                continue;
            }
            if (isCapitalLetter(query[i])) {
                return false;
            }
        }
        return indexPattern == pattern.length;
    }
}
