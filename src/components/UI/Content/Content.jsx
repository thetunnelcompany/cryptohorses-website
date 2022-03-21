import React from "react"
import ReactPageScroller from "react-page-scroller"
import "./Content.css"

const Content = ({currentPage, setCurrentPage, blocks}) => {
  return (
    <div className="Content">
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={(page) => setCurrentPage(page)}
      >
        {blocks.map(({Element}, index) => {
          return <Element key={index} />
        })}
      </ReactPageScroller>
    </div>
  )
}

export default Content
