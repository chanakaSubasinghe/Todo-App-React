import React, {Component} from 'react'

import TaskItem from './taskItem'

export default class TaskList extends Component{

    render() {

        // assigning variables using props
        const {tasks, clearList, onDelete, onEdit} = this.props

        return(
            <div class="col-md-6">
                <div className="my-5">
                    <h1 className="my-3">Your Todo List</h1>

                    <table className="table table-striped">
                        <caption><button class="btn btn-sm btn-info" onClick={clearList}>clear list</button></caption>
                        <thead>
                        <tr>
                            <th scope="col">Task name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => {
                                return (
                                    <TaskItem 
                                        title={task.title} 
                                        isCompleted={task.isCompleted} 
                                        onDelete={() => onDelete(task.id)} 
                                        onEdit={() => onEdit(task.id)} 
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}