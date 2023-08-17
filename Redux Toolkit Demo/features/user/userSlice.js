const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: '',
}

// create thunk outside of createSlice()
// createAsyncThunk will automatically dispatch lifecycle actions
// based on promise state (pending, fulfilled, rejected action types)
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data.map((user) => user.id))
})

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
      error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  },
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers
