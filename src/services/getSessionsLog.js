import api from '~/instances/api'

export default () => api.get(`${localStorage.getItem('userId')}/sessions`)
