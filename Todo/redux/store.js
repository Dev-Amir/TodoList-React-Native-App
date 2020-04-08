import { createStore, combineReducers, applyMiddleware } from 'redux';
import TasksReducer from './tasks/tasksReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    tasks: TasksReducer,
})

const Store = createStore(reducers, applyMiddleware(thunk));
// بدون هیچ مشکلی ساخته شده
// یه لحظه شک کردم به خودم
// چیزی دستگیرت شد؟
// 
export default Store;