import './Header.css'
import Search from './Search'
import UserHeader from './UserHeader'

function Header() {
  return (
    <>
    <header>
      <div className="flex">
        <h1><a className="select-none" href="http://localhost:5173">Arctic</a></h1>
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