
import './firebase'
import './index.css'
import './fonts/Mont/Mont-Regular.woff'
import './fonts/Mont/Mont-SemiBold.woff'
import './fonts/Mont/Mont-Bold.woff'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store'

import App from './App'

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

