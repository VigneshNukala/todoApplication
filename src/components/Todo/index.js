import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TaskList from '../TaskList'
import TaskInput from '../TaskInput'

import './index.css'

class Todo extends Component {
    //defining state
    state = {todoList:[{id:1,name:'Doctor Appointment'}],searchInput:'',paraClassname:false}

    //When Todo form of adding the task is Submitted it will create a new object and add it to the state todoList
    onSubmitForm = () => {
        const {searchInput} = this.state
        const newItem = {
            id:uuidv4(),
            name:searchInput
        }
        this.setState(prevState => ({
            todoList: [...prevState.todoList,newItem]
        }))
    }

    //To sotre the the input value entered in the input field and adding it to the state searchInput
    onChangeInput = value => {
        this.setState({searchInput:value})
    }

    //adding the checkbox value while clicking the checkbox
    onChangeCheckbox = value => {
        this.setState({paraClassname:value})
    }
    
    //Deleting the selected object from the state todoList
    onDeleteTodo = id => {
        const {todoList} = this.state
        const filteredTodoData = todoList.filter(
          each => each.id !== id,
        )
        this.setState({todoList:filteredTodoData})
      }

    render(){
        const {searchInput,todoList,paraClassname} = this.state
        return (
            <div className='bg'>
                <div className='todo-card-container'>
                    <h1 className='todo-heading'>Todo <span className='span'>List</span></h1>
                    <div>
                        <TaskInput searchInput={searchInput} onSubmitForm={this.onSubmitForm} onChangeInput={this.onChangeInput} />
                        <ul className='list-container'>
                        {todoList.map(todo => (
                            <TaskList key={todo.id} todoDetails={todo} onChangeCheckbox={this.onChangeCheckbox} paraClassname={paraClassname} onDeleteTodo={this.onDeleteTodo} onEditTodo={this.onEditTodo} />
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo