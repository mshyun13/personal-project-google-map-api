/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import GetMap from './components/GetMap'
import AddLocation from './components/AddLocation'
import Body from './components/LocationList'
import ExampleMap from './components/Map'
import EditLocation from './components/EditLocations'

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<AddLocation />} />
    <Route path="/locations" element={<Body />} />
    <Route
      path="/:id/:lat/:lng"
      element={
        <>
          <Body />
          <GetMap />
        </>
      }
    />
    <Route
      path="/edit/:id"
      element={
        <>
          <Body />
          <EditLocation />
        </>
      }
    />
    <Route path="/maps" element={<ExampleMap />} />
  </Route>,
)

export default routes
