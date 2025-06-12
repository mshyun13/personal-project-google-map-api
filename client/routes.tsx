/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import GetMap from './components/GetMap'
import Home from './components/Home'

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="/:id/:lat/:lng" element={<GetMap />} />
  </Route>,
)

export default routes
