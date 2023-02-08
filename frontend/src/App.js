import React from 'react';
import './App.css';
import ClickButton from './feature/ClickButton';
import Resume from './resume/Resume';

const App = () => {
  return (
    <div>
      <Resume />
      <ClickButton />
    </div>
  );
};

export default App;
