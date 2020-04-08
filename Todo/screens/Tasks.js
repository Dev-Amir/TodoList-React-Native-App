import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask } from './../redux/tasks/tasksActions';

const Tasks = () => {
    const dispatch = useDispatch();
    const taskReducer = useSelector(store => store.tasks);
    const { tasks } = taskReducer;
    const { taskItemStyle, taskItemTextStyle } = styles;

    const removeTaskHandler = id => {
        dispatch(deleteTask(id));
    }

    return (
        <View style={{flex: 1, alignItems: "center",}}>
            {
                // تمام تمام
                // چطور بود
                // تست کردم کاملا درست کار میکرد
                // عالی بود دستت درد نکنه خیلی زحمت کشیدی ببخشید 
                // خواهش میکنم
                // کد نوشتی یا برات بفرستم
                // ه برام بی زحمت بفرست
                // میزارم رو گیت ادرس میفرستم
                //  یک میلیون هم بریز به حساب
                // :) هاها
                // بلاک نکن
                // بلاک و ریپورت 
                // هههه
                // خب تلگرام منتظر باش تا بفرستم 
                // فعلا
                // الان میام
                
                tasks.length < 1 && (
                    <View style={{backgroundColor: "black", borderRadius: 4, padding: 15}}>
                        <Text style={{color: "white", fontSize: 25}}>Not Task</Text>
                    </View>
                )
            }
            {
                tasks.length >= 1 && tasks.map((el , key) => {
                    return (
                        <TouchableOpacity style={taskItemStyle} activeOpacity="0.9" onPress={() => removeTaskHandler(el.id)}>
                            <Text key={key} style={taskItemTextStyle}>{el.value}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default Tasks;

const styles = StyleSheet.create({
    taskItemStyle: {
        width: "50%",
        backgroundColor: "#ccc",
        borderTopWidth: 2
    },
    taskItemTextStyle:{
        color: "black",
        textAlign: "center",
        fontSize: 30,   
    }
})
