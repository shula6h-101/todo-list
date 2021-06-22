import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Create } from '../action';

const Add = ({ Create }) => {
    const [inputText, setInputText] = useState('');

    const inputHandeler = e => {
        setInputText(e.target.value)
    };

    const submitText = () => {
        Create({ text: inputText, completed: false, id: Math.random() * 1000 }) //object is passed with id and text.
        setInputText('');
    };

    return (
        <div className="ui fluid action input">
            <input onChange={inputHandeler} value={inputText} type="text" />
            <button onClick={submitText} className="ui large teal icon button">
                <i className="plus icon"></i>
            </button>
        </div>
    );
};

export default connect(null, { Create })(Add);

//Add component contains input tag to take todo text and call our "Create" action with it.