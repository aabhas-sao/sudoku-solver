export const createDefaultGrid: () => (null | number )[][] = () => {
    const rows: (null | number)[] = [];
    const grid: (null | number)[][] = [];

    const GRID_SIZE: number = 9;

    for (let i = 0; i < GRID_SIZE; i++) { 
        rows.push(null);
    }
    for (let i = 0; i < GRID_SIZE; i++) { 
        grid.push(rows);
    }

    return grid;
}
