/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import GetMap from './components/GetMap'

const routes = createRoutesFromElements(
<Route element={<App />}>
  <Route index element={<GetMap />} />
</Route>

)

export default routes
