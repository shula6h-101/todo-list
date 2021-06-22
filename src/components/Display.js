import React from 'react';
import { connect } from 'react-redux';
import { Delete, Check } from '../action';

//state, Delete and Check action creator are passed as props. 

const Display = ({ todos, Delete, Check }) => {

    const renderList = todos.map((todo) => {

        return (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'done' : ''}`}>
                {todo.text}
                <div className='check'>
                    <button className='ui green button' onClick={() => { Check(todo) }}>
                        <i class="check white icon"></i>
                    </button>
                </div>
                <button className='ui red button' onClick={() => { Delete(todo) }}>
                    <i class="trash alternate icon"></i>
                </button>
            </div>
        );
    });

    return (
        <div className='todo-list'>
            {renderList}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { todos: state.todoList };
};

export default connect(mapStateToProps, { Delete, Check })(Display);

//Display component displays the state array of todo list using map function.