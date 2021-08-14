import { canPlace } from "./sudokuSolver";
import { GRID_SIZE } from "./createDefaultGrid";

export const validateProblem = (grid: number[][]): boolean => {
    const gridCopy = grid.slice();
    let valid = true;

    gridCopy.slice().forEach((row, i) => 
        row.forEach((item, j) => {
            if(item !== 0) {
                const toBePlaced = grid[i][j];
                gridCopy[i][j] = -1;
                if(!canPlace(i, j, GRID_SIZE, gridCopy, toBePlaced)) {
                    valid = false;
                }
                gridCopy[i][j] = toBePlaced;
            }
        })
    )

    return valid;
}