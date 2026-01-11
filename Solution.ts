
function camelMatch(queries: string[], pattern: string): boolean[] {
    const resultsCamelMatch: boolean[] = new Array();
    for (let query of queries) {
        resultsCamelMatch.push(isCamelMatch(query, pattern));
    }
    return resultsCamelMatch;
};

function isCapitalLetter(letter: string): boolean {
    return letter >= 'A' && letter <= 'Z';
}

function isCamelMatch(query: string, pattern: string): boolean {
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
