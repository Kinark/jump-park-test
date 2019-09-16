import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as sessionsLog from '../actions/sessionsLog'
import rootReducer from '../reducers'
import initialStore from './initialStore'

let middlewares = [ReduxThunk]

const logger = createLogger({
   collapsed: true
})

if (process.env.NODE_ENV === 'development') {
   const composeEnhancers = composeWithDevTools({
      actionCreators: {
         sessionsLog
      }
   })
   middlewares.push(logger)
   middlewares = composeEnhancers(applyMiddleware(...middlewares))
} else if (process.env.NODE_ENV === 'production') {
   middlewares = applyMiddleware(...middlewares)
}

const store = createStore(rootReducer, initialStore, middlewares)

export default store
