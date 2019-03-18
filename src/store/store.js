import {createStore} from 'redux';
import TaskReducer from '../reducers/toDo';

const intialState={
    data:[]
};

const Store = createStore(TaskReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;