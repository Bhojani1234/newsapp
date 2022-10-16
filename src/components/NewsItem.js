import React, { Component } from 'react'

export class NewsIitem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://c.ndtvimg.com/2022-09/2dskurh8_ali-fazal_625x300_30_September_22.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='caed-text'><small className='text-muted'>By {!author?"unknown": author} on {new Date(date).toDateString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target="blank" className="btn btn-sm btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
} 

export default NewsIitem