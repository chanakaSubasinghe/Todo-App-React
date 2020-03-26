import React, {Component} from 'react';

// importing bootstrap, bootstrap js, jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js'

// importing components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import TaskInput from './components/taskInput'
import TaskList from './components/taskList'

//import css files
import style from './public/css/style.css'


// importing images
import todoPic from '../src/public/images/todolist.jpg'


export default class App extends Component {

    // declaring state
    state = {
      tasks: [],
      id: Date.now(),
      task: '',
      isCompleted: false,
      editItem: false
    }

    // handle change function
    handleChange = e => {
      this.setState({
        task: e.target.value
      })
    }

    // on submit function
    onSubmit = (e) => {
      e.preventDefault()

      // creating a new task provided by user
      const newTask = {
        id: this.state.id,
        title: this.state.task,
        isCompleted: this.state.isCompleted
      }

      // get the last updated Tasks from the state
      const updatedTasks = this.state.tasks

      // condition - check if new Task is completed or not
      if (newTask.isCompleted !== true)
        updatedTasks.unshift(newTask) // insert to front of the array
      else
        updatedTasks.push(newTask) // insert to end of the array

      // declaring set state
      this.setState({
        tasks: updatedTasks,
        task: '',
        isCompleted: false,
        id: Date.now(),
        editItem: false
      })

    }

    // clear list function - additional 
    clearList = () => {
      this.setState({
        tasks: []
      })
    }

    // delete function
    onDelete = (id) => {

      // filter task array using provided id
      const filteredTasks = this.state.tasks.filter((task) => {
        return task.id !== id
      })

      // set state - filtered Tasks
      this.setState({
        tasks: filteredTasks
      })
    }

    // edit function
    onEdit = (id) => {
     
      // filter task array using provided id
      const filteredTasks = this.state.tasks.filter((task) => {
        return task.id !== id
      })

      // assigning specific Task using provided id
      const selectedTask = this.state.tasks.find(task => task.id === id)

      // set state
      this.setState({
        id,
        tasks: filteredTasks,
        task: selectedTask.title,
        editItem: true,
        isCompleted: selectedTask.isCompleted
      })

    }

    // mark as completed function
    MarkAsCompleted = () => {
      this.setState({
        isCompleted: true // set this isCompleted state as true
      })
    }

    render() {
        return (
            <div>
              <NavBar />
              <div class="container">
                  <div className="my-5">
                      <img src={todoPic} className="mx-auto d-block TaskImage" />
                  </div>

                  <div class="row">
                      <TaskInput 
                        task={this.state.task} 
                        isCompleted={this.state.isCompleted} 
                        handleChange={this.handleChange} 
                        onSubmit={this.onSubmit} 
                        editItem={this.state.editItem} 
                        MarkAsCompleted={this.MarkAsCompleted} 
                      />

                      <TaskList 
                        tasks={this.state.tasks} 
                        clearList={this.clearList} 
                        onDelete={this.onDelete} 
                        onEdit={this.onEdit}  
                      />
                  </div>
              </div>

              <Footer />
            </div>
        );
      }
}

