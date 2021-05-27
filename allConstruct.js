/* Brute Force
 * m = target.length n = wordBank.length
 * time: O(n^m)
 * space: O(m)
 */
const allConstruct = (target, wordBank) => {
    if(target == '') return [[]]

    const res = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetWays = suffixWays.map(way => [word, ...way])
            res.push(...targetWays)
        }
    }

    return res
}
/* Memo
 * time: O(n^m * m)
 * space: O(m^2)
 */
const allConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target == '') return [[]]

    const res = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstructMemo(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            res.push(...targetWays)
        }
    }
    memo[target] = res
    return res
}

const allConstructTable = (target, wordBank) => {
    const table = Array(target.length + 1)
    .fill()
    .map(() => [])
    table[0] =[[]]
    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
                const newCombs = table[i].map(subarray => [...subarray, word])
                table[i + word.length].push(...newCombs)
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstructMemo('hello', ['cat', 'dog', 'mouse']))
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(allConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))