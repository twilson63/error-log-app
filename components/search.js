import React from 'react'

const Search = props => {
  return (
    <form>
      <input 
        value={props.criteria}
        onChange={props.handleCriteriaChange}
        className="w-100 pa2" type="text" placeholder="Search for Error" />
    </form>
  )
}

export default Search