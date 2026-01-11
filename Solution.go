
package main

func camelMatch(queries []string, pattern string) []bool {
    resultsCamelMatch := make([]bool, len(queries))
    for i := range queries {
        resultsCamelMatch[i] = isCamelMatch(queries[i], pattern)
    }
    return resultsCamelMatch
}

func isCapitalLetter(letter byte) bool {
    return letter >= 'A' && letter <= 'Z'
}

func isCamelMatch(query string, pattern string) bool {
    indexPattern := 0

    for i := range query {
        if indexPattern < len(pattern) && query[i] == pattern[indexPattern] {
            indexPattern++
            continue
        }
        if isCapitalLetter(query[i]) {
            return false
        }
    }
    return indexPattern == len(pattern)
}
