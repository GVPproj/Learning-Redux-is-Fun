const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 10,
}

// createSlice()
// automatically generates action functions with
// same name as the reducers!

const cakeSlice = createSlice({
  name: 'cake',
  // initialState: initialState,(key and value both the same)
  initialState, // where our numOfCakes lives
  reducers: {
    // hold our state transition options here
    ordered: (state) => {
      // no action passed in
      // as we are just decrementing by 1
      // uses Immer under the hood to simulate mutability
      state.numOfCakes--
    },
    restocked: (state, action) => {
      // increment by amount specified in payload
      state.numOfCakes += action.payload
    },
  },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
