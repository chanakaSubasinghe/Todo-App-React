import React, { Component } from 'react'


export default class TaskItem extends Component {
    render() {

        // assigning variables using props
        const {title, onDelete, onEdit , isCompleted} = this.props
        
        return (
            <tr>
                <td>{title}</td>
                <td>
                    <button className=
                        {isCompleted 
                            ? 'btn btn-sm btn-outline-danger' 
                            : 'btn btn-sm btn-outline-warning'
                        }>

                        {isCompleted 
                            ? 'completed' 
                            : 'pending'
                        }
                        </button>
                </td>
                <td> 
                    {isCompleted 
                        ? <button class="btn btn-sm btn-danger ml-5" onClick={onDelete}>delete</button> 
                        : <div><button class="btn btn-sm btn-primary" onClick={onEdit}>edit</button> <button class="btn btn-sm btn-danger" onClick={onDelete}>delete</button></div>
                        }
                </td>
            </tr>
        )
    }
}


