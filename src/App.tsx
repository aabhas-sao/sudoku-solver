import React from 'react';
import {Board} from './components/board';
import './App.scss';
import {createDefaultGrid} from './utils/createDefaultGrid';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <Board gridDefault={createDefaultGrid()} />
    </div>
  );
}

export default App;
