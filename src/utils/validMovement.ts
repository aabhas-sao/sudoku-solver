import { GRID_SIZE } from "./createDefaultGrid";

export const validMovement = (r: number, c: number): boolean => {
    if(r < 0 || r >= GRID_SIZE) return false;
    if(c < 0 || c >= GRID_SIZE) return false;
    return true;
}