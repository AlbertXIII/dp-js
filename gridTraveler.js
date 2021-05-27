//only can move right or down

//memoized
const gridTravelerMemo = (m, n, memo = {}) => {
    const key = m + ',' + n
    if(key in memo) return memo[key]
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0
    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
    return memo[key]
}

const gridTraveler = (m, n) => {
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0
    return gridTraveler(m - 1, n) + gridTraveler(m, n -1)
}

const gridTravelerTable = (m, n) => {
    const table = Array(m + 1 )
        .fill()
        .map(() => Array(n + 1).fill(0))
    
    table[1][1] = 1
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j]
            if(j + 1 <= n) table[i][j + 1] += current
            if(i + 1 <= m) table[i + 1][j] += current 
        }
    }
    //console.log(table)
    return table[m][n]
}

console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 3))
console.log(gridTravelerMemo(18, 18))
console.log(gridTravelerTable(18, 18))