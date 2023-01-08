import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const FullScreenLoader = () => {
  const loader = useSelector(state => state.settings.loader)

  return (
    <div className={loader}>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}

export default FullScreenLoader
