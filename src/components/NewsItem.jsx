import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.webp?s=2048x2048&w=is&k=20&c=SWW3cYI5IkccJBhYwGEiWbYZeTZImQiGUNH9osVbVxI="} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
