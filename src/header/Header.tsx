import './Header.css'
import Search from './Search'
import UserHeader from './UserHeader'
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
    <header>
      <div className="flex">
        <h1><Link className="select-none" to="/">Arctic</Link></h1>
        <UserHeader />
      </div>
      <div className="flex">
        <Search />
      </div>
    </header>
    </>
  )
}

export default Header