import React from 'react';
import '../styles/cell.scss';

interface Props {
    num: number | null
}

export const Cell: React.FC<Props> = ({num}) => {
    return num === null ? <div className="cell">-1</div> : <div className="cell">{num}</div>;
}