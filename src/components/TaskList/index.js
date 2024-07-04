import { MdOutlineDeleteOutline,MdEdit } from "react-icons/md"

import './index.css'
const TaskList = props => {
    //input from the props
    const {todoDetails,onChangeCheckbox,paraClassname,onDeleteTodo} = props
    const {id,name} = todoDetails
    
    //checkbox value assigning to Todo component wheather it is checked or not
    const onChange = event => {
        onChangeCheckbox(event.target.checked)
    }

    //sending the id of the todo Item to be deleted to the Todo component
    const onDelete = () => {
        onDeleteTodo(id)
    }

    const classs = paraClassname ? 'para para1' : 'para'
    
    return (
        <li className='list-item'>
            <input type='checkbox' className="checkbox" value={id} onChange={onChange} />
            <p className={classs}>{name}</p>
            <div className="right">
                <button className='delete-icon' type='button'>
                    <MdEdit className="del"/>
                </button>
                <button className='delete-icon' type='button' onClick={onDelete}>
                    <MdOutlineDeleteOutline className="del"/>
                </button>
            </div>
        </li>
    )
}

export default TaskList