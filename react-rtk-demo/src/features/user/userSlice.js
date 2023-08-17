import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  users: [],
  error: '',
}

// create thunk outside of createSlice()
// createAsyncThunk will automatically dispatch lifecycle actions
// based on promise state (pending, fulfilled, rejected action types)
export const fetchUsers = createAsyncThunk(
  // 1st arg, ACTION TYPE
  'user/fetchUsers',
  // 2nd arg, CALLBACK THAT RETURNS A PROMISE
  () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data)
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  },
})

export default userSlice.reducer
