const store = require('./app/store')

// bring in our automatically generated
// action functions to dispatch

const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice.js').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

// get our state w/ getState()

console.log('Initial State: ', store.getState())

// subscribe to changes in the store
// our Logger will run
// the action types logged are generated automatically
const unsubscribe = store.subscribe(() => {
  console.log('Updated State: ', store.getState())
})

// dispatch fetchUsers()

store.dispatch(fetchUsers())

// dispatch a few actions from cakeSlice

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3)) // use our payload
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()
