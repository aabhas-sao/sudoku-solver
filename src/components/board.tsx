import React, {useState, useEffect} from 'react';
import {Cell} from './cell';
import '../styles/board.scss';

interface Props {
    gridDefault : (number | null)[][];
}

export const Board: React.FC<Props> = ({gridDefault}) => { 
    const [grid, setGrid] = useState<(number | null)[][]>(gridDefault);
    return <div id="board">{
        grid.map(rows => rows.map(item => <Cell num={item} />))
    }</div>;
}
