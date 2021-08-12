import React, {useState} from 'react';
import {Cell} from './cell';
import '../styles/board.scss';
import { sudokuSolver } from '../utils/sudokuSolver';
import { GRID_SIZE } from '../utils/createDefaultGrid';

interface Props {
    gridDefault : (number | null)[][];
}

export const Board: React.FC<Props> = ({gridDefault}) => { 
    const [grid, setGrid] = useState<(number | null)[][]>(gridDefault);
    const handleSolve = () => {
        setGrid(sudokuSolver(GRID_SIZE, grid));
    }
    return <>
        <div id="board">
        {
            grid.map(rows => rows.map(item => <Cell num={item} />))
        }
        </div>
        <button onClick={handleSolve} >Solve Board</button>
    </>;
}
