import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div>
        <div className="card my-3" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {description}
            </p>
            <p className="card-text"><small className="text-muted">Last updated by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>

          <div style={{
            display: "flex",
            justifyContent:"flex-end",
            position: "absolute",
            right: "0",
          }}>
            <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
          
        </div>
      </div>
    );
  }
}
