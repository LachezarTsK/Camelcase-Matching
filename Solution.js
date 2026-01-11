
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    const resultsCamelMatch = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        resultsCamelMatch[i] = isCamelMatch(queries[i], pattern);
    }
    return resultsCamelMatch;
};

/**
 * @param {string]} letter
 * @return {boolean}
 */
function isCapitalLetter(letter) {
    return letter >= 'A' && letter <= 'Z';
}

/**
 * @param {string} query
 * @param {string} pattern
 * @return {boolean}
 */
function isCamelMatch(query, pattern) {
    let indexPattern = 0;

    for (let i = 0; i < query.length; ++i) {
        if (indexPattern < pattern.length && query[i] === pattern[indexPattern]) {
            ++indexPattern;
            continue;
        }
        if (isCapitalLetter(query[i])) {
            return false;
        }
    }
    return indexPattern === pattern.length;
}
