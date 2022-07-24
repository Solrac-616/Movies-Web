import React from 'react'

const Pagination = (props) => {
  return (
      <div className="topbar-filter">
          <label>Movies per page:</label>
          <div className="pagination2">
              <span>Page {props.actual} of {props.total}:</span>
              for (let i = 0; i < props.total; i++) {
                <a className="active" href="#">1</a>
                
              }
              
              <a href="#">2</a>
              <a href="#"><i className="ion-arrow-right-b"></i></a>
          </div>
      </div>
  )
}

export default Pagination