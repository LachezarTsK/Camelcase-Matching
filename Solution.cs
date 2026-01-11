
using System;

public class Solution
{
    public IList<bool> CamelMatch(string[] queries, string pattern)
    {
        IList<bool> resultsCamelMatch = [];
        foreach (var query in queries)
        {
            resultsCamelMatch.Add(IsCamelMatch(query, pattern));
        }
        return resultsCamelMatch;
    }

    private bool IsCapitalLetter(char letter)
    {
        return letter >= 'A' && letter <= 'Z';
    }

    private bool IsCamelMatch(string query, string pattern)
    {
        int indexPattern = 0;

        for (int i = 0; i < query.Length; ++i)
        {
            if (indexPattern < pattern.Length && query[i] == pattern[indexPattern])
            {
                ++indexPattern;
                continue;
            }
            if (IsCapitalLetter(query[i]))
            {
                return false;
            }
        }
        return indexPattern == pattern.Length;
    }
}
