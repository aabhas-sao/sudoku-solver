function canPlace(i: number, j: number, n: number, grid:(number | null)[][], tobePlaced: number): boolean {
    // check row and col
    for (let k: number = 0; k < n; k++) {
        if(grid[i][k] === tobePlaced || grid[k][j] === tobePlaced) return false;
    }

    let x = Math.sqrt(n);
    let startRow: number = Math.floor(i / x) * x;
    let startCol: number = Math.floor(j / x) * x;
    for (let p = startRow; p < startRow + x; p++) {
        for (let q = startCol; q < startCol + x; q++) {
            if(grid[p][q] === tobePlaced) return false;
        }
    }

    return true;
}

function sudokuHelper(i: number, j: number, n: number, grid:(number | null)[][]): boolean {
    // base case
    if(i >= n) {
        console.log("end reached");
        return true;
    }


    // if reached end of the column move to next row
    if(j >= n) {
        return sudokuHelper(i + 1, 0, n, grid);
    }
    // recursive case
    // if the current cell is empty, try to fill it
    if(grid[i][j] === 0) {
        for (let k = 1; k <= n; k++) {
            if(canPlace(i, j, n, grid, k)) {
                grid[i][j] = k;
                let solveKarPaye: boolean = sudokuHelper(i, j + 1, n, grid);
                if(solveKarPaye) return true;
            }
        }
        // backtracking step
        grid[i][j] = 0;
        return false;
    } else {
        return sudokuHelper(i, j + 1, n, grid);
    }
}

export const sudokuSolver = (n: number, grid: (number | null)[][]): (number | null)[][] => {
    let gridCopy = grid.slice();
    let t1 = performance.now();
    sudokuHelper(0, 0, n, gridCopy);
    let t2 = performance.now();
    console.log(t2-t1, "ms");
    return gridCopy;
}