import React from 'react'

const Search = (props) => {
  
  return (
    <div>
      <input
        value={props.searchValue}
        type="text"
        placeholder="Type here..."
        onChange={event => props.setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search
