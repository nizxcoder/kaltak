import React, { Component } from 'react'

export default class NewsItems extends Component {

    constructor() {
        super();
    }
    render() {
            let { title, description, imageUrl, author, url, published} = this.props;
        return (
            <div className="card mx-auto my-3" style={{ width: "20rem" }}>
                <img src={imageUrl} className="card-img-top" height={'200px'} alt="Not Available" />
                <div className="card-body">
                    <strong>Author: {author}</strong> <p>Published At: {published}</p>
                    <h4 className="card-title">{title}...</h4>
                    <p className="card-text">{description}...</p>
                    <a href={url} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
