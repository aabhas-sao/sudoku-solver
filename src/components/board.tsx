import React, {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Cell} from './cell';
import '../styles/board.scss';
import { sudokuSolver } from '../utils/sudokuSolver';
import { ToastContainer, toast } from 'react-toastify';
import { GRID_SIZE, nums } from '../utils/createDefaultGrid';
import {validateProblem} from '../utils/validateProblem';
import { ControlPanel } from './controlPanel';
import {validMovement} from '../utils/validMovement';
import { handleHorizontalMovement, handleVerticalMovement } from '../utils/controls';

interface Props {
    gridDefault : number[][];
}

export const Board: React.FC<Props> = ({gridDefault}) => {
    const [grid, setGrid] = useState<number[][]>(gridDefault.slice());
    const [selectedRow, setSelectedRow] = useState<number>(0);
    const [selectedCol, setSelectedCol] = useState<number>(0);

    const clearGrid = () => {
        setGrid(prevState => prevState.map(rows => rows.map(item => 0)));
    }

    const handleSolve = () => {
        if(validateProblem(grid)) {
            const solvedGrid = sudokuSolver(GRID_SIZE, grid);
            setGrid(prevState => prevState.map((rows, r) =>  
            rows.map((item, c) => 
                solvedGrid[r][c]
            )));
        } else {
            toast('⚠️ Invalid problem statement', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",
                });
        }
    }
    
    
    
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
        
        const horizontalValue = handleHorizontalMovement(e, r, c);
        if( horizontalValue !== 0) {
            if(validMovement(r, c + horizontalValue)) {
                setSelectedCol(prevState => prevState + horizontalValue);
            }
        }

        const verticalValue = handleVerticalMovement(e, r, c);
        if( verticalValue !== 0) {
            if(validMovement(r + verticalValue, c)) {
                setSelectedRow(prevState => prevState + verticalValue);
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown",  handlePress);
        return () => {
          document.removeEventListener("keydown", handlePress);
        }
    }, [selectedCol, selectedRow]);

    return <div id='board-outer'>
        <div id="board-container">
            <div id="board">
            {
                grid.map((rows, r) => 
                    rows.map((item, c) => <Cell key={(r * GRID_SIZE ) + c} num={item} idx={[r, c]} selectedCell={[selectedRow, selectedCol]} />)
                )
            }
            </div>
        </div>
        <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
        />
        <ControlPanel handleSolve={handleSolve} reset={clearGrid} />
    </div>;
};
