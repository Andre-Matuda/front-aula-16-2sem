import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
      <header>
        <h1>TEMP</h1>
      </header>

        <Outlet/>

      <footer>
        TEMP
      </footer>
    </div>
  )
}

