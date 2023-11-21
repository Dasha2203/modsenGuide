import { Route, Routes } from 'react-router-dom'
import { RoutesEnum } from '@consts'
import { ThemeProvider } from '@emotion/react'
import DetailPlace from '@pages/DetailPlace'
import Favorites from '@pages/Favorites'
import Search from '@pages/Search'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import theme from './theme'

import './App.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={RoutesEnum.main} element={<Layout />}>
          <Route path={RoutesEnum.main} element={<Search />} />
          <Route path={RoutesEnum.favorites} element={<Favorites />} />
          <Route path={RoutesEnum.detailPlace} element={<DetailPlace />} />
        </Route>
        <Route path={RoutesEnum.login} element={<Login />} />
        <Route path={RoutesEnum.register} element={<Register />} />
        <Route path={RoutesEnum.notFound} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
