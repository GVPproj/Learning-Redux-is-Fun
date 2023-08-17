// define our store with configure store

const configureStore = require('@reduxjs/toolkit').configureStore

// require logger middleware

const reduxLogger = require('redux-logger')

// import our cakeReducer from cakeSlice

const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
const userReducer = require('../features/user/userSlice')

// add logger

const logger = reduxLogger.createLogger()

// invoke our configureStore functions

const store = configureStore({
  // handles combineReducer under the hood
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //  by default, the configureStore function
  // adds some middleware
  // we append our logger to that list
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// export our store so we can use it in index.js

module.exports = store
