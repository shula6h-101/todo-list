import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
export default combineReducers({
    todoList: todoReducer
});


//If more reducers are added then combine them here.