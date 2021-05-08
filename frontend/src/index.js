import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SimpleReactLightbox from 'simple-react-lightbox'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Provider>,
  document.getElementById('root')
)
