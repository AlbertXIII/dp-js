//with the less numbers quantity
//brute force
//time: O(n^m * m)
//space: O(m * 2)
const bestSum = (target, numbers) => {
    if(target === 0) return []
    if(target < 0) return null

    let shortestComb = null

    for(let num of numbers){
        const remainder = target - num
        const remainderComb = bestSum(remainder, numbers)
        if(remainderComb !== null){
            const combination = [...remainderComb, num]
            if(shortestComb === null || combination.length < shortestComb.length)
            shortestComb = combination
        }
    }

    return shortestComb
}

//brute force
//time: O(m^2 * n)
//space: O(m^2)
const bestSumMemo = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === 0) return []
    if(target < 0) return null

    let shortestComb = null

    for(let num of numbers){
        const remainder = target - num
        const remainderComb = bestSumMemo(remainder, numbers, memo)
        if(remainderComb !== null){
            const combination = [...remainderComb, num]
            if(shortestComb === null || combination.length < shortestComb.length)
            shortestComb = combination
        }
    }
    memo[target] = shortestComb
    return shortestComb
}

const bestSumTable = (target, numbers) => {
    const table = Array(target + 1).fill(null)
    table[0] = []
    for(let i = 0; i <= target; i++){
        if(table[i] != null){
            for(let num of numbers){
                const combination = [...table[i], num]
                if(!table[i + num] || table[i + num].length > combination.length) 
                    table[i + num] = combination
            }
        }
    }
    return table[target]
}

console.log(bestSum(7,[5, 3, 4, 7]))
console.log(bestSum(8,[1, 4, 5]))
console.log(bestSumMemo(100,[1, 2, 5, 25]))
console.log(bestSumTable(8,[1, 4, 5]))
console.log(bestSumTable(100,[1, 2, 5, 25]))