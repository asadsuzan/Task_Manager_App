import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { TbTrash } from 'react-icons/tb'
import { BsPatchCheckFill } from 'react-icons/bs'



const Tasks = ({ TaskName, TaskNote, TaskCategory, handleRemoveTask, handleTaskStatus, _id, IsTaskCompleted }) => {

  return (
    <div className='task-card p-3'>
      <div className="task-content">
        <h5>{TaskName}</h5>
        <p>{TaskNote}</p>
      </div>
      <div className="task-actions d-flex align-items-center justify-content-between">
        <div className="left-side d-flex align-items-center">
          <div className="due-date">
            <input type="date" />
            <span>24-02-2023</span>
          </div>
          <div className="category">

            <select id='category' required>
              <option value="none">Task</option>
              <option value="my-day">My Day</option>
              <option value="inprogress">Inprogress</option>
            </select>
            <span>{TaskCategory}</span>
          </div>
        </div>
        <div className="right-side d-flex align-items-center">
          <div className="isCompleted" onClick={() => handleTaskStatus(_id)}

          >
            <span className='status-icon' >
              {
                IsTaskCompleted ? <BsPatchCheckFill size={'20px'} color="green" /> : <MdRadioButtonUnchecked size={'20px'} color="green" />
              }
            </span>

          </div>
          <div className='isImportant'>
            <AiOutlineStar size={'20px'} color="orange" />
          </div>
          <div className='delete' onClick={() => handleRemoveTask(_id)}>
            <TbTrash size={'20px'} color="red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
