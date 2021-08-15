import React, {useRef, useEffect} from 'react';
import {Board} from './components/board';
import './App.scss';
import {createDefaultGrid} from './utils/createDefaultGrid';

const App: React.FC = () => {
  return (
    <div className="App">
      <Board gridDefault={createDefaultGrid()} />
    </div>
  );
}

export default App;
