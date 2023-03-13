import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, newsDate } = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl ? imgUrl : 'https://hackaday.com/wp-content/uploads/2023/02/morphOS_Michael_MJD_live_cd.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description ? description : 'description: NULL....'}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(newsDate).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
