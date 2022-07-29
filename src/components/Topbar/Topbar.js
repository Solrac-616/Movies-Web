import React from 'react'

const Topbar = () => {
  return (
      <div className="topbar-filter">
          <p>Found <span>1,608 movies</span> in total</p>
          <label>Sort by:</label>
          <select>
              <option value="popularity">Popularity Descending</option>
              <option value="popularity">Popularity Ascending</option>
              <option value="rating">Rating Descending</option>
              <option value="rating">Rating Ascending</option>
              <option value="date">Release date Descending</option>
              <option value="date">Release date Ascending</option>
          </select>
          <a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
          <a href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
      </div>
  )
}

export default Topbar