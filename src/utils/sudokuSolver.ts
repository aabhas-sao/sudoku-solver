function sqrt(n: number) {
    let ans: number = 0;
    for(let i = 1; i <= n; i++) {
        if(i * i === n) return i;
        if(i * i > n) {
            ans = i;
            break;
        }
    }
    return ans - 1;
}

function canPlace(i:number, j:number, n: number, grid:(number | null)[][]): boolean {
    // check row and col
    for (let k = 0; k < n; k++) {
        if(k === j) continue;
        if(grid[i][k] === grid[i][j]) return false;
    }

    for (let k = 0; k < n; k++) {
        if(k === i) continue;
        if(grid[k][i] === grid[i][j]) return false;
    }

    let x = sqrt(n);

    let startRow = i / x;
    let startCol = j / x;

    for (let p = startRow; p < startRow + x; p++) {
        for (let q = startCol; q < startCol + x; q++) {
            if(p === i && q === j) continue;
            if(grid[p][q] === grid[i][j]) return false;
        }
    }

    return true;
}

function sudokuHelper(i: number, j: number, n: number, grid:(number | null)[][]): boolean {
    // base case
    if(i === n) {
        return true;
    }

    // if reached end of the column move to next row
    if(j === n) {
        sudokuHelper(i + 1, 0, n, grid);
    }

    // recursive case
    // if the current cell is empty, try to fill it
    if(grid[i][j] !== null) {
        let solveKarPaye: boolean = false;
        for (let i = 1; i <= n; i++) {
            if(canPlace(i, j, n, grid)) {
                solveKarPaye = sudokuHelper(i, j + 1, n, grid);
                if(solveKarPaye) break;
            }
        }
        // backtracking step
        if(!solveKarPaye) {
            grid[i][j] = null;
            return false;
        }
    }

    return true;
}

export const sudokuSolver = (n: number, grid: (number | null)[][]) => {
    sudokuHelper(0, 0, n, grid);
}