//function returns a boolean indicating wheater or not the target can be generated using the array numbers
const canSum = (target, numbers) => {
    if(target === 0) return true
    if(target < 0) return false

    for(let n of numbers){
        //console.log(n)
        const remainder = target - n
        //console.log(remainder)
        if(canSum(remainder, numbers) === true) return true
    }

    return false
}

//memoized
const canSum2 = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === 0) return true
    if(target < 0) return false
    
    for(let n of numbers){
        const remainder = target - n
        //console.log(remainder)
        if(canSum2(remainder, numbers, memo) === true){
            memo[target] = true
            return true
        } 
    }

    memo[target] = false
    return false
}
/* Tabulation
 * time: O(mn)
 * space: O(m)
 */
const canSumTable = (target, numbers) => {
    const table = Array(target +1).fill(false)
    table[0] = true
    for(let i = 0; i <= target; i++){
        if(table[i] === true){
            for(let num of numbers){
                table[i + num] = true
            }
        }
    }
    return table[target]
}

console.log(canSum(5,[2, 4]))
console.log(canSum2(5,[2, 3]))
console.log(canSum2(30,[7, 14]))
console.log(canSumTable(28,[7, 14]))