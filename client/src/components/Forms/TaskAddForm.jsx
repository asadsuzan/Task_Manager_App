import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiLogin } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { reqToSaveTask } from '../../Api/axios'


const TaskAddForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSaveTask = (e) => {
    e.preventDefault()
    const task = {
      TaskName: e.target.taskName.value,
      TaskNote: e.target.taskNote.value || '',
      TaskCategory: e.target.category.value
    }

    reqToSaveTask(task).then(res => {
      if (res) {
        window.alert('saved')
      }
    })

  }

  return (
    <>
      <div className={isOpen ? 'task-add-form' : 'task-add-form-close'}>
        <form className="task-form" onSubmit={handleSaveTask}>
          <div className="from-group">

            <input type="text" id='taskName' placeholder='Task Name' required autoComplete='off' />
          </div>
          <div className="from-group">

            <input type="text" id='taskNote' placeholder='Task Note' />
          </div>
          <div className="from-group task-category">
            <select id='category' required>
              <option value="none">Task</option>
              <option value="my-day">My Day</option>
              <option value="important">Important</option>
              <option value="inprogress">Inprogress</option>
            </select>
          </div>
          <div className="from-group">
            <Button type='submit' variant="contained" endIcon={<CiLogin />} >
              Save
            </Button>
          </div>
        </form>

      </div>
      <button type='button' className='handle-task-form' onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen ? <AiOutlineClose /> : <FiPlus />
        }
        {
          isOpen ? 'close' : 'Add Task'
        }
      </button>

    </>
  )
}

export default TaskAddForm
