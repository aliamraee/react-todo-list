import React, { useState, useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TaskListContext } from './../context/TaskListContext'

const Task = props => {

    const { findItem, tasks, setTasks } = useContext(TaskListContext);
    const [checked, setChecked] = useState(false)
    const removeTitle = id => {
        setTasks(tasks.filter((task) => task.id !== id))
        console.log(props.id);
        console.log(tasks);
    }

    const handleInputChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <li className="list-item" >
                <Checkbox
                onChange={handleInputChange}
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
                <span className={checked ? "enable" : "disable"}>{props.title}</span>

            <div className="btn">
                <button onClick={() => removeTitle(props.id)} className="btn-delete task-btn">
                    <i className="fa fa-trash"></i>
                </button>
                <button onClick={() => findItem(props.id)} className="btn-edit task-btn">
                    <i className='fa fa-pencil'></i>
                </button>
            </div>
        </li >
    );
}

export default Task;
