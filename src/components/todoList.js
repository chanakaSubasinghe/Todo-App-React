import React, {Component} from 'react'
import {Link} from 'react-router-dom'

// importing images
import todoPic from '../public/images/todolist.jpg'

// importing components
import TodoTasks from './todoTasks'

const Task = (props) => (
    <tr>
        <td>{props.task.taskName}</td>
        {props.task.isCompleted ? (
            <td>
                <button className="btn btn-outline-success">Not Completed</button>
            </td>

        ) : (
            <td>
                <button class="btn btn-outline-danger">Not Completed</button>
            </td>
        )

        }
        <td><Link to={"itemCategories/edit/" + props.task.id}>edit</Link> | <a href="#" onClick={() => {props.deleteTask(props.task.id)}}>delete </a></td>
    </tr>
)

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            taskName: '',
            description: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.MarksAsCompleted = this.MarksAsCompleted.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTask(e){

        e.preventDefault()

        // create new task with unique id
        const newTask = {
            id: Date.now(),
            taskName: this.state.taskName,
            description: this.state.description,
            isCompleted: false
        }

        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(newTask)
            }
        })

        this.setState({
            taskName: '',
            description: ''
        })

        console.log(this.state.tasks)

    }

    //map to the list
    TaskList(){
        return this.state.tasks.map(currentTask => {
            return <Task task={currentTask} deleteTask={this.deleteCategory} key={currentTask.id}/>
        })
    }

    MarksAsCompleted(task){
        task.isCompleted = true
    }

    render() {

        return(
            <div class="container">
                <div className="my-5">
                    <img src={todoPic} className="mx-auto d-block" style={{width: "60%"}} />
                </div>

                <div class="row">
                    <div class="col-md-6 my-5">
                        <div className="container">
                            <div className="col-md-8 my-5 todo-form">
                                <form onSubmit={this.addTask}>
                                    <div className="form-group">
                                        <label>Todo Name</label>
                                        <input type="text" name="taskName" value={this.state.taskName}
                                               onChange={this.handleChange} className="form-control" maxLength={20}
                                               required/>
                                        <small className="form-text text-muted">We'll never share your email with anyone
                                            else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" name="description" value={this.state.description}
                                               onChange={this.handleChange} className="form-control" maxLength={20}/>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">add to list</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div className="my-5">
                            <h1 className="my-3">Your all todos</h1>

                            <table className="table table-striped">
                                <caption>List of all todos</caption>
                                <thead>
                                <tr>
                                    <th scope="col">Task name</th>
                                    {/*<th scope="col">CreatedAt</th>*/}
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.TaskList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}