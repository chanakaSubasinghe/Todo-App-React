import React, {Component} from 'react'

export default class TaskInput extends Component{

    render() {

        // assigning variables using props
        const {task, isCompleted, handleChange, onSubmit, editItem, MarkAsCompleted} = this.props

        return(
            <div class="col-md-6 my-5">

                    <div className="col-md-8 todo-form">
                
                    <h1>Add Todo</h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" name="taskName" value={task}
                                    onChange={handleChange} className="form-control" maxLength={15}
                                    required/>
                                <small className="form-text text-muted">We'll manage your tasks to make your life easier.</small>
                            </div>

                            {editItem ? (     
                                                       
                                <div>
                                    {isCompleted 
                                        ?   <button type="button" className='btn btn-danger btn-block btn-sm my-3'>Completed</button>
                                        :   <button type="button" className='btn btn-warning btn-block btn-sm my-3' onClick={() => MarkAsCompleted()}>Mark as Completed</button>
                                    }
                                    
                                    <button type="submit" className='btn btn-success btn-block'>update task</button>
                                </div>

                             ) : (

                                <div>
                                    <button type="submit" className='btn btn-primary btn-block'>add task</button>
                                </div>

                            )} 

                        </form>
                </div>
            </div>
        )
    }
}