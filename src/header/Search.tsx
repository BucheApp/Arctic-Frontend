import './Search.css'
import SearchIcon from './SearchIcon'

function Search() {
  return (
    <>
    <div className="flex gap">
      <SearchIcon />
      <input className="search-input" type="text" placeholder="検索" />
    </div>
    </>
  )
}

export default Search