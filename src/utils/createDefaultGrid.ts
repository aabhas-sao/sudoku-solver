export const GRID_SIZE: number = 9;
export const createDefaultGrid: () => (null | number )[][] = () => {
    const rows: (null | number)[] = [];
    const grid: (null | number)[][] = [];    

    for (let i = 0; i < GRID_SIZE; i++) { 
        rows.push(0);
    }

    for (let i = 0; i < GRID_SIZE; i++) { 
        grid.push(rows.slice());
    }

    return grid;
}
