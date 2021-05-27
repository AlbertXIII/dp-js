/* Brute Force
 * time: O(n^m * m)
 * space: O(m^2)
 */
const canConstruct = (target, wordBank) => {
    if(target == '') return true
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            if(canConstruct(suffix, wordBank)) return true
        }
    }
    return false
}

/* Memo
 * time: O(n * m^2)
 * space: O(m^2)
 */
const canConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target == '') return true

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            if(canConstructMemo(suffix, wordBank, memo)){
                memo[target] = true
                return true
            } 
        }
    }
    memo[target] = false
    return false
}

const canConstructTable = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    //simulate an empty string can be generated
    table[0] = true
    for(let i = 0; i <= target.length; i++){
        if(table[i] === true){
            for(let word of wordBank){
                if(target.slice(i, i + word.length) === word) 
                    table[i + word.length] = true    
            }
        }
    }
    return table[target.length]
}

console.log(canConstruct('hello', ['he','llo']))
console.log(canConstructMemo('halloween', ['h','llo','a','w','ee','n']))
console.log(canConstructTable('halloween', ['h','llo','a','w','ee','n']))