
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { store } from 'store'
import './firebase'
import './index.css'
import './fonts/Mont/Mont-Regular.woff'
import './fonts/Mont/Mont-SemiBold.woff'
import './fonts/Mont/Mont-Bold.woff'

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

