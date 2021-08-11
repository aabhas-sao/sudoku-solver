import React, {useState} from 'react';


interface Props {
    gridDefault : (number | null)[][];
}

export const Board: React.FC<Props> = ({gridDefault}) => { 
    const [grid, setGrid] = useState<(number | null)[][]>(gridDefault);
    console.log(grid);
    return <h1>h</h1>;
}
