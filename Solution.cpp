
#include <vector>
#include <string>
#include <string_view>
using namespace std;

class Solution {

public:
    vector<bool> camelMatch(const vector<string>& queries, const string& pattern) const {
        vector<bool> resultsCamelMatch(queries.size());
        for (int i = 0; i < queries.size(); ++i) {
            resultsCamelMatch[i] = isCamelMatch(queries[i], pattern);
        }
        return resultsCamelMatch;
    }

private:
    bool isCapitalLetter(char letter) const {
        return letter >= 'A' && letter <= 'Z';
    }

    bool isCamelMatch(string_view query, string_view pattern) const {
        int indexPattern = 0;

        for (int i = 0; i < query.size(); ++i) {
            if (indexPattern < pattern.size() && query[i] == pattern[indexPattern]) {
                ++indexPattern;
                continue;
            }
            if (isCapitalLetter(query[i])) {
                return false;
            }
        }
        return indexPattern == pattern.size();
    }
};
