import React from 'react';
import {Board} from './components/board';
import './App.scss';
import {createDefaultGrid} from './utils/createDefaultGrid';
import { ControlPanel } from './components/controlPanel';

const App: React.FC = () => {
  return (
    <div className="App">
      <Board gridDefault={createDefaultGrid()} />
      <ControlPanel />
    </div>
  );
}

export default App;
