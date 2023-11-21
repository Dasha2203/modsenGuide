
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './firebaseApp'
import './assets/fonts/Mont/Mont-Regular.woff'
import './assets/fonts/Mont/Mont-SemiBold.woff'
import './assets/fonts/Mont/Mont-Bold.woff'

import App from './App'
import { store } from './store'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

