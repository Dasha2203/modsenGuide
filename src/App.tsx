import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import theme from './theme'
import './App.css'
import DetailPlace from 'pages/DetailPlace'
import Search from 'pages/Search'
import Favorites from 'pages/Favorites'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/place/:id" element={<DetailPlace />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
