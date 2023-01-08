import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { TbTrash } from 'react-icons/tb'

const MyDay = () => {
  return (
    <div className='task-card p-3'>
      <div className="task-content">
        <h5>todo application</h5>
        <p>complete the all routes for app just today </p>
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
              <option value="important">Important</option>
              <option value="inprogress">Inprogress</option>
            </select>
            <span>Important</span>
          </div>
        </div>
        <div className="right-side d-flex align-items-center">
          <div className="isCompleted">
            <MdRadioButtonUnchecked size={'20px'} color="green" />
          </div>
          <div className='isImportant'>
            <AiOutlineStar size={'20px'} color="orange" />
          </div>
          <div className='delete'>
            <TbTrash size={'20px'} color="red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDay
