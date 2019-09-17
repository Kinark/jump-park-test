import getSessionsLog from '~/services/getSessionsLog'
import sessionsLog from '~/data/sessionsLog.json'

export const REQUEST_SESSIONS_LOG = 'REQUEST_SESSIONS_LOG_DATA'
export const RECEIVE_SESSIONS_LOG = 'RECEIVE_SESSIONS_LOG_DATA'
export const REQUEST_SESSIONS_LOG_ERROR = 'SET_SESSIONS_LOG_ERROR'
export const REQUEST_SESSIONS_LOG_OFFLINE_MODE = 'REQUEST_SESSIONS_LOG_OFFLINE_MODE'

export const requestSessionsLog = () => ({ type: REQUEST_SESSIONS_LOG })
export const receivedSessionsLog = payload => ({ type: RECEIVE_SESSIONS_LOG, payload })
export const requestSessionsLogErrored = payload => ({ type: REQUEST_SESSIONS_LOG_ERROR, payload })
export const requestSessionsLogOfflineMode = payload => ({ type: REQUEST_SESSIONS_LOG_OFFLINE_MODE, payload })

export const fetchSessionsLog = () => dispatch => {
   dispatch(requestSessionsLog())
   getSessionsLog()
      .then(({ data }) => {
         dispatch(requestSessionsLogOfflineMode(false))
         return dispatch(receivedSessionsLog(data.data.content))
      })
      .catch(() => {
         console.log('You are in offline mode.')
         dispatch(receivedSessionsLog(sessionsLog.data.content))
         dispatch(requestSessionsLogOfflineMode(true))
      })
}
