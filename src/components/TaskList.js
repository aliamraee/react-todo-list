import React, { useContext } from 'react';

import { TaskListContext } from './../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
            {tasks.length ? (
                <ul key={tasks[0].id} className="list">
                    {
                        tasks.map(item => {
                            return (
                                <Task key={item.id} id={item.id} title={item.title} />
                            )
                        })
                    }
                </ul>
            ) : (
                    <div className="no-tasks">The list is empty.</div>
                )}
        </div>
    );
}

export default TaskList;
