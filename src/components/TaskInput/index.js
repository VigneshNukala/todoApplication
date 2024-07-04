import './index.css'

const TaskInput = props => {
    //taking input from props
    const {searchInput,onSubmitForm,onChangeInput} = props
    
    //on change of the input
    const onChange = event => {
        onChangeInput(event.target.value)
    }
    
    //on Submiting the form to add todo Item to the state in Todo Component
    const onSubmit = event => {
        event.preventDefault()
        onSubmitForm()
    }

    return (
        <form className='submit-form' onSubmit={onSubmit}>
            <div className='top'> 
                <label htmlFor='todo-input' className='todo-label'>Add a new Task</label>
                <input id='todo-input' type='text' value={searchInput} className='todo-input' onChange={onChange} />
            </div>
            <button type='submit' className='btn'>Add Todo</button>
        </form>
    )
}

export default TaskInput