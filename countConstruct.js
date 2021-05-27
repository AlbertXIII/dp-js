/* Brute Force
 * time: O(n^m * m)
 * space: O(m^2)
 */
const countConstruct = (target,wordBank) => {
    if(target == '')return 1

    let totalCount = 0
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const restNumWays = countConstruct(target.slice(word.length), wordBank)
            totalCount += restNumWays
        }
    }
    return totalCount
}
/* Memo
 * time: O(n * m^2)
 * space: O(m^2)
 */
const countConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target == '')return 1

    let totalCount = 0
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const restNumWays = countConstructMemo(target.slice(word.length), wordBank, memo)
            totalCount += restNumWays
        }
    }
    memo[target] = totalCount
    return totalCount
}

const countConstructTable = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1
    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word)
                table[i + word.length] += table[i] 
        }
    }
    return table[target.length] 
}

console.log(countConstruct('hello', ['he','llo']))
console.log(countConstructMemo('halloween', ['h','llo','a','w','ee','n']))
console.log(countConstructTable('purple', ['purp','p','ur','le','purpl']))