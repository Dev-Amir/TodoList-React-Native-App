import TasksTypes from "./tasksTypes";

const {
    ADD_TASK,
    DELETE_TASK,

} = TasksTypes;

export const addTask = value => ({
    type: ADD_TASK,
    value,
});

export const deleteTask = id => ({
    type: DELETE_TASK,
    id,
})

/*
تا اینجا اوکی هستی؟
*/