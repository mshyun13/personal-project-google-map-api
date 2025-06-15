import { Link, Outlet } from 'react-router'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="app">
        <div className="title">
          <Link to={'/'} className="titleText">
            Your Log
          </Link>
        </div>
        <div className="bodyContent">
          <Nav />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
