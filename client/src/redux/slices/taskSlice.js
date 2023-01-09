import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    new: [],
    myDay: [],
    inprogress: [],
    completed: [],
    important: []
  },
  reducers: {
    setNew: (state, action) => {
      state.new = action.payload
    },
    setMyDay: (state, action) => {
      state.myDay = action.payload
    },
    setInprogress: (state, action) => {
      state.inprogress = action.payload
    },
    setCompleted: (state, action) => {
      state.completed = action.payload
    },
    setImportant: (state, action) => {
      state.important = action.payload
    },

  }

})

export const { setNew, setMyDay, setInprogress, setCompleted, setImportant } = taskSlice.actions
export default taskSlice.reducer