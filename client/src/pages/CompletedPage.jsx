import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { reqToViewCompleted, reqToUpdateTaskStatus } from '../Api/axios'
import AppContainer from '../components/AppContainer'
// import Completed from '../components/Completed'
import Tasks from '../components/Tasks'

const CompletedPage = () => {
  const tasks = useSelector(state => state.tasks.completed)
  console.log(tasks)
  const handleTaskStatus = (id) => {
    reqToUpdateTaskStatus(id, 'false').then(res => {
      if (res) {
        reqToViewCompleted()
      }
    })
  }
  useEffect(() => {
    reqToViewCompleted()
  }, [])
  return (
    <>
      <AppContainer>
        {/* <Completed /> */}
        <div className="tasks-container">
          {
            tasks?.map(task => <Tasks  {...task} handleTaskStatus={handleTaskStatus} key={task._id} />)
          }
        </div>
      </AppContainer>
    </>
  )
}

export default CompletedPage
