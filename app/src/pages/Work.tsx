import React from 'react';
import { TodoForm } from '../components/ToDoForm';

export const Work: React.FC = () => {
  // const windowsObject = (window as any).electron;
  return (
    <>
      <div>
        <TodoForm />
      </div>
      {/* <p> The home directory is @ {windowsObject.homeDir()}</p>
      <p> The os version is @ {windowsObject.osVersion()}</p>
      <p> The architicture of the os is @ {windowsObject.arch()}</p> */}
      <TodoForm />
    </>
  );
};
