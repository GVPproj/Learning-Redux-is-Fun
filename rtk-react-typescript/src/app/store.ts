// define our store with configure store
import { configureStore } from '@reduxjs/toolkit'

// import our cakeReducer from cakeSlice

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from '../features/user/userSlice'

// add logger

// const logger = reduxLogger.createLogger()

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

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch