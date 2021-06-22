import React from 'react';
import Add from './Add';
import Display from './Display';

const App = () => {
    return (
        <div className='ui container'>
            <div className='header'>
                My ToDo List
            </div>
            <div className='add-todo'>
                <Add />
            </div>
            <div className='todo-container'>
                <Display />
            </div>
        </div>
    );
};

export default App;

//App component which contains two other components "Add" and "Display". 