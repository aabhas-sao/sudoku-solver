import React, {useState, useEffect} from 'react';
import {Cell} from './cell';
import '../styles/board.scss';
import { sudokuSolver } from '../utils/sudokuSolver';
import { GRID_SIZE } from '../utils/createDefaultGrid';
import {validateProblem} from '../utils/validateProblem'

interface Props {
    gridDefault : number[][];
}

export const Board: React.FC<Props> = ({gridDefault}) => {
    const [grid, setGrid] = useState<number[][]>(gridDefault);
    const [selectedRow, setSelectedRow] = useState<number>(0);
    const [selectedCol, setSelectedCol] = useState<number>(0);
    
    const handleSolve = () => {
        if(validateProblem(grid)) {
            setGrid(sudokuSolver(GRID_SIZE, grid));
        } else {
            console.log("invalid problem");
        }
    }

    const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log('pressed sth', e.key)
    }

    const validMovement = (r: number, c: number): boolean => {
        if(r < 0 || r >= GRID_SIZE) return false;
        if(c < 0 || c >= GRID_SIZE) return false;
        return true;
    }
    
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    const handlePress = (e: KeyboardEvent): void => {
    let c = selectedCol;
    let r = selectedRow;

    if(nums.indexOf(e.key) !== -1) {
        setGrid(prevState => prevState.map(
            (row, i) => row.map(
                (item, j) => {
                    if(i === r && j === c) {
                        return parseInt(e.key);
                    }
                    else return item;
                }
            )
        ))
            
    }

    if(e.key === "ArrowRight" || e.key === "d") {
        
        if(selectedCol === GRID_SIZE - 1) {
        r = r + 1;
        c = 0;
        } else {
        c = c + 1;
        }
        if(validMovement(r, c)) {
        setSelectedRow(r);
        setSelectedCol(c);
        }
    }

    if(e.key === "ArrowLeft" || e.key === "a") {
        if(selectedCol === 0) {
        r = r - 1;
        c = GRID_SIZE - 1;
        } else {
        c = c - 1;
        }
        if(validMovement(r, c)) {
        setSelectedRow(r);
        setSelectedCol(c);
        }
    }

    if(e.key === "ArrowUp" || e.key === "w") {
        if(validMovement(selectedRow - 1, selectedCol)) {
        setSelectedRow(prevState => prevState - 1);
        }
    }

    if(e.key === "ArrowDown" || e.key === "s") {
        if(validMovement(selectedRow + 1, selectedCol)) {
        setSelectedRow(prevState => prevState + 1);
        }
    }

    // console.log(selectedRow, selectedCol);
    }

    useEffect(() => {
        document.addEventListener("keydown", handlePress);
        return () => {
          document.removeEventListener("keydown", handlePress);
        }
    }, [selectedCol, selectedRow]);

    return <div id='board-outer'>
        <div id="board-container" onKeyDown={e => handleKey(e)}>
            <div id="board">
            {
                grid.map((rows, r) => 
                    rows.map((item, c) => <Cell key={(r * GRID_SIZE ) + c} num={item} idx={[r, c]} selectedCell={[selectedRow, selectedCol]} />)
                )
            }
            </div>
        </div>
        <button onClick={handleSolve}>Solve Board</button>
    </div>;
}
