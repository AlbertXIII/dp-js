//memoization
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    return memo[n]
}

const fib = n => {
    if(n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

const fibTable = n => {
    const table = Array(n + 1).fill(0)
    table[1] = 1
    for(let i = 0; i <= n; i++){
        table[i+1] += table[i]
        table[i+2] += table[i]
    }
    return table[n]
}

console.log(fib(6))
console.log(fibMemo(50))
console.log(fib(8))
console.log(fibTable(100))