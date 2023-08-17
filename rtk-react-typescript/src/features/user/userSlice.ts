import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
  id: number
  name: string
}

type initialState = {
  loading: boolean
  users: User[]
  error: string
}


const initialState: initialState = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export default userSlice.reducer
