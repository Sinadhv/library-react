import {IoSearchSharp} from "react-icons/io5";

function SearchBox({search , setSearch , searchHandler}) {
  return (
    <div>
      <input type="text" 
      placeholder='Search title'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  )
}

export default SearchBox
