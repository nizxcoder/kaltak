import React, { Component } from 'react'
import img from './newsImg.jpg'

export default class NewsItems extends Component {
    render() {
            let { title, description, imageUrl, author, url, published,name} = this.props;
        return (
            <div className="card mx-auto my-3 shadow-lg" style={{ width: "20rem" }} >
                <span className='position-absolute transalte-middle badge rounded-pill bg-danger ' style={{right
                : "10px", top: "-6px"}}><strong>{name}</strong></span>
                <img src={imageUrl || img} className="card-img-top" height={'200px'}  alt={"Not Available"}/>
                <div className="card-body">
                    <strong>Author: {author}</strong> <p><strong>Published At:</strong> {published.slice(0,16)}</p>
                    <h4 className="card-title">{title}...</h4>
                    <p className="card-text">{description}...</p>
                    <a href={url} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
