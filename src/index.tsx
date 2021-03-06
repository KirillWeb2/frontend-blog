import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { setupStore } from './redux/store'

import App from './App'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

const store = setupStore()

root.render(
      <Provider store={store}>
            <Router>
                  <App />
            </Router>
      </Provider>
)
