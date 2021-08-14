import React from 'react';
import '../styles/cell.scss';

interface Props {
    num: number | null;
    selectedCell: [number, number],
    idx: [number, number],
}

export const Cell: React.FC<Props> = ({num, idx, selectedCell}) => {
    return (selectedCell[0] === idx[0] && selectedCell[1] === idx[1])
    ? <div className="cell selected">{
        num === 0 ? "": num 
    }</div> 
    : <div className="cell"> {
        num === 0 ? "": num    
    }</div>;
}