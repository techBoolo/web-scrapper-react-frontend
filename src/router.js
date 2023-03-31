import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.js'
import { Home, Login, Admin } from './pages/index.js'

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='admin' element={<Admin />} />
    </Route>
  )
)
