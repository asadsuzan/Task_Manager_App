import React, { useEffect } from 'react'
import AppContainer from '../components/AppContainer'
import Tasks from '../components/Tasks'
import { useSelector } from 'react-redux'
import { reqToGetTaskByCate, reqToUpdateTaskStatus } from '../Api/axios'

const TaskPage = () => {
  const tasks = useSelector(state => state.tasks.new)


  const handleTaskStatus = (id) => {
    reqToUpdateTaskStatus(id, 'true').then(res => {
      if (res) {
        reqToGetTaskByCate('none')
      }
    })
  }

  useEffect(() => {
    reqToGetTaskByCate('none')
  }, [])

  return (
    <>
      <AppContainer>
        <div className="tasks-container">
          {
            tasks?.map(task => <Tasks {...task} handleTaskStatus={handleTaskStatus} key={task._id} />)
          }
        </div>
      </AppContainer>
    </>
  )
}

export default TaskPage
