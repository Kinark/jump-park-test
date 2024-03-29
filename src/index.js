import React from 'react'
import { render } from 'react-dom'
import App from '~/App'
import { Provider } from 'react-redux'
import store from '~/redux/store'

const root = document.getElementById('root')

render(
   <Provider store={store}>
      <App />
   </Provider>,
   root
)

if (module.hot) {
   module.hot.accept('./App.js', () => {
      // eslint-disable-next-line global-require
      const NextApp = require('./App.js').default
      render(<NextApp />, root)
   })
}
