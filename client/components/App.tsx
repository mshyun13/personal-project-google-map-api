import { Link, Outlet } from 'react-router'
import Nav from './Nav'
import Body from './Body'

function App() {
  return (
    <>
      <div className="app">
        <Link to={'/'}>MukBang Log</Link>
        <Nav />
        <Body />
        <Outlet />
      </div>
    </>
  )
}

export default App
