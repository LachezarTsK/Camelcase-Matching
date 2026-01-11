
class Solution {

    fun camelMatch(queries: Array<String>, pattern: String): List<Boolean> {
        val resultsCamelMatch = mutableListOf<Boolean>()
        for (query in queries) {
            resultsCamelMatch.add(isCamelMatch(query, pattern))
        }
        return resultsCamelMatch
    }

    private fun isCapitalLetter(letter: Char): Boolean {
        return letter in 'A'..'Z'
    }

    private fun isCamelMatch(query: String, pattern: String): Boolean {
        var indexPattern = 0

        for (i in query.indices) {
            if (indexPattern < pattern.length && query[i] == pattern[indexPattern]) {
                ++indexPattern
                continue
            }
            if (isCapitalLetter(query[i])) {
                return false
            }
        }
        return indexPattern == pattern.length
    }
}
