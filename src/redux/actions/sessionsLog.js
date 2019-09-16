import getSessionsLog from '~/services/getSessionsLog';
import sessionsLog from '~/data/sessionsLog.json';

export const REQUEST_SESSIONS_LOG = 'REQUEST_SESSIONS_LOG_DATA'
export const RECEIVE_SESSIONS_LOG = 'RECEIVE_SESSIONS_LOG_DATA'
export const REQUEST_SESSIONS_LOG_ERROR = 'SET_SESSIONS_LOG_ERROR'

export const requestSessionsLog = () => ({ type: REQUEST_SESSIONS_LOG })
export const receivedSessionsLog = payload => ({ type: RECEIVE_SESSIONS_LOG, payload })
export const requestSessionsLogErrored = payload => ({ type: REQUEST_SESSIONS_LOG_ERROR, payload })

export const fetchSessionsLog = () => dispatch => {
   dispatch(requestSessionsLog())
   getSessionsLog()
      .then(({ data }) => dispatch(receivedSessionsLog(data)))
      .catch(() => dispatch(receivedSessionsLog(sessionsLog)))
}
