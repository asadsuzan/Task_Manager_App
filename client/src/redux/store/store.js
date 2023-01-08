import { configureStore } from '@reduxjs/toolkit'
import settingSlice from '../slices/settingSlice'

export default configureStore({
  reducer: {
    settings: settingSlice
  }
})