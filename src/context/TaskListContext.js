import React, { createContext, useState,useEffect } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [editItem , setEditItem]=useState(null)
    const initialState = JSON.parse(localStorage.getItem("tasks")) || []
    const [tasks, setTasks] = useState(initialState)

    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const editTask = ( title,id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTasks(newTasks) 
        setEditItem(null)       
    }

    return (
        <TaskListContext.Provider value={{tasks, setTasks,findItem,editTask,editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
