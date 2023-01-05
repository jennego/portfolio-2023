import * as React from "react"

const Portfolio = () => {
  return (
    <div>
      <h2 className="heading">Portfolio</h2>

      <p>hi</p>
      <p> hover with overlay (semi transparent or solid?)</p>
      <p>coloured borders? pattern</p>

      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div
              className="box"
              style={{ background: "blue", height: "300px" }}
            >
              12
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
