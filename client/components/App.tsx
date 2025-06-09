import { Outlet } from "react-router"

function App() {
  

  return (
    <>
      <div className="app">
        <h1>MukBang Log</h1>
          <Outlet key={'app'}/>
      </div>
    </>
  )
}

export default App
