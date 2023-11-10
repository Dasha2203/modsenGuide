import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import theme from './theme'
import './App.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
