//return an [] containing any combination that sums the target

//brute force
const howSum = (target, nums) => {
    if(target === 0) return []
    if(target < 0) return null

    for(let n of nums){
        const remainder = target - n
        const remainderRes = howSum(remainder, nums)
        if(remainderRes !== null) return [...remainderRes, n]
    }
    
    return null
}

//memoized
const howSum2 = (target, nums, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === 0) return []
    if(target < 0) return null

    for(let n of nums){
        const remainder = target - n
        const remainderRes = howSum2(remainder, nums, memo)
        if(remainderRes !== null) {
            memo[target] = [...remainderRes, n]
            return memo[target]
        }
    }
    memo[target] = null
    return null
}

const howSumTable = (target, nums) => {
    const table = Array(target + 1).fill(null)
    table[0] = []
    for(let i = 0; i <= target; i++){
        if(table[i] != null){
            for(let num of nums){
                table[i + num] = [...table[i], num]
            }
        }
    }
    return table[target]
}

console.log(howSum(7, [2,3])) // [3,2,2]
console.log(howSum2(30, [7,14])) // [3,2,2]
console.log(howSumTable(7, [4,3])) // [4,3]
console.log(howSumTable(300, [7,14])) // [4,3]