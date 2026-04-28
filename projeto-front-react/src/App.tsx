import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
      <header>
        <h1>TEMP</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/produtos">Produtos</Link>
        </nav>
      </header>

        <Outlet/>

      <footer>
        TEMP
      </footer>
    </div>
  )
}

