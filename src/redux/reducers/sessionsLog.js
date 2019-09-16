import { combineReducers } from 'redux'
import { REQUEST_SESSIONS_LOG, RECEIVE_SESSIONS_LOG, REQUEST_SESSIONS_LOG_ERROR } from '../actions/sessionsLog'

function data(state = [], action) {
   switch (action.type) {
      case RECEIVE_SESSIONS_LOG:
         return action.payload
      default:
         return state
   }
}

function loading(state = true, action) {
   switch (action.type) {
      case REQUEST_SESSIONS_LOG:
         return true
      case RECEIVE_SESSIONS_LOG:
      case REQUEST_SESSIONS_LOG_ERROR:
         return false
      default:
         return state
   }
}

function error(state = '', action) {
   switch (action.type) {
      case REQUEST_SESSIONS_LOG_ERROR:
         return action.payload
      default:
         return state
   }
}

export default combineReducers({
   data,
   loading,
   error
})
