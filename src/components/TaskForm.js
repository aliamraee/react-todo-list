import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from "./../context/TaskListContext"


const TaskForm = () => {
    const [title, setTitle] = useState("")
    const { tasks, setTasks, editItem, editTask } = useContext(TaskListContext);



    const handleChange = e => {
        setTitle(e.target.value)
    }
    const addTask = (title) => {
        setTasks([
            ...tasks, { title: title, id: title }
        ])
        setTitle('')

    }
    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle("")
        } else {
            editTask(title, editItem.id)
        }
    }
    const clearList = () => {
        setTasks([])
        setTitle('')
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
            console.log(editItem);

        } else {
            setTitle("")
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                className="task-input"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
            />
            <div className="buttons">
                <button type="submit" className="add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button type="button" onClick={clearList} className="clear-btn">Clear</button>
            </div>
        </form>
    );
}

export default TaskForm;
