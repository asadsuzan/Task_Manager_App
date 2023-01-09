import { configureStore } from '@reduxjs/toolkit'
import settingSlice from '../slices/settingSlice'
import taskSlice from '../slices/taskSlice'

export default configureStore({
  reducer: {
    settings: settingSlice,
    tasks: taskSlice
  }
})