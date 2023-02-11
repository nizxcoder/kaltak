import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            pageNo: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?sources=techcrunch&pageSize=12&page=1&apiKey=6cf456e90bda4cb29c7a8f7dd4199a85`;
        this.setState({loading: true});
        let data = await fetch(url);
        let newsData = await data.json();
        this.setState({articles: newsData.articles,
        loading: false})
    }
    changePage = async (page) => {
        if (page > 0) {
            this.setState({
                pageNo: this.state.pageNo + 1
            });
            let url = `https://newsapi.org/v2/everything?sources=techcrunch&pageSize=15&page=${this.state.pageNo+1}&apiKey=6cf456e90bda4cb29c7a8f7dd4199a85`
            this.setState({loading: true})
            let data = await fetch(url);
            let newsData = await data.json();
            this.setState({ articles: newsData.articles,
            loading: false});
        }
        else {
            this.setState({
                pageNo: this.state.pageNo - 1
            });
            let url = `https://newsapi.org/v2/everything?sources=techcrunch&pageSize=15&page=${this.state.pageNo-1}&apiKey=6cf456e90bda4cb29c7a8f7dd4199a85`
            let data = await fetch(url);
            let newsData = await data.json();
            this.setState({ articles: newsData.articles });
        } 
        console.log(this.state.pageNo)
    }
    render() {
        return (
            <div className="container">
                <div className="mx-3 mt-3 mb-0">
                    <h2 className="text-center">Top HeadLines - Kal Tak News</h2>
                </div>
                {this.state.loading && <Spinner/>}
                {!(this.state.loading)&& <div className="d-flex flex-wrap">
                    {
                        this.state.articles.map((element) => {
                            return (
                                <NewsItems key={element.url} url={element.url} author={element.author.slice(0, 20)} title={element.title.slice(0, 60)} published={element.publishedAt} description={element.description.slice(0, 90)} imageUrl={element.urlToImage} />
                            )
                        })
                    }
                    <div className="container d-flex justify-content-around m-4">
                        <button type="button" className="btn btn-primary" disabled={this.state.pageNo < 2} onClick={() => { this.changePage(0) }}> &larr; Previous</button>
                        <button type="button" className="btn btn-outline-dark px-5">{this.state.pageNo}</button>
                        <button disabled={this.state.pageNo > 5} type="button" className="btn btn-primary" onClick={() => { this.changePage(1) }}>Next&rarr;</button>
                    </div>
                </div>}
            </div>
        )
    }
}