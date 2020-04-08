import TasksTypes from "./tasksTypes";

const {
    ADD_TASK,
    DELETE_TASK,

} = TasksTypes;

const initialTaskState = {
    tasks: [],
}
// هستی ؟
// خب الان امتحان کردم دیتای داخل ریداکس به درتی اورد
// مشکلی نداری
// نه ممنون دستت درد نکنه خیلی زحمممممت کش
// هنوز افزودن تسک مونده
// :)
// مممممیدونم
// خب
// ۱
// ۲
// ۳
// start

const TasksReducer = (state = initialTaskState, action) => {

    switch(action.type){
        case ADD_TASK:{
            const id = Math.random();
            const informationTask = {
                value: action.value,
                id,
            };

            return {
                ...state,
                tasks: [...state.tasks, informationTask]
            }
        }

        case DELETE_TASK:{

            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }

        default: 
            return state;
    }
}

export default TasksReducer;