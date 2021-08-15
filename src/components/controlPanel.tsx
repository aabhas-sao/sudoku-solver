import React from 'react';
import '../styles/controlPanel.scss';

interface Props {
    handleSolve: () => void;
}

export const ControlPanel: React.FC<Props> = ({handleSolve}) => {
    return (<div id="control-panel">
        <h1 className="title">Sudoku Solver</h1>
        <article>
            <h2>Controls</h2>
            <br/>
            <span className="controls-desc">
                <div className="controls-box">
                    <kbd>↑</kbd> <span className="kbd-text-middle">or</span> <kbd>↓</kbd>
                    <br /><br />
                    <span >to move Vertically</span>
                </div>
                <br /><br /><br />
                <div className="controls-box">
                    <kbd>←</kbd> <span className="kbd-text-middle">or</span> 
                    <kbd>→</kbd><span className="kbd-text-middle">or</span> <kbd>Space</kbd>
                    <br /><br />
                    <span >to move Horizontally</span>
                </div>
                <br/><br/>
                <div className="controls-box" >
                    Press any number to set value
                    <p className="small-note">
                        <br/>
                        PS: 
                        Currently site is best viewed on desktop, 
                        <br/>
                        controls for mobile devices coming soon
                    </p>
                </div>
            </span>
        </article>
        <button onClick={handleSolve} id="solveButton">
            Solve Board    
        </button>
    </div>);
}