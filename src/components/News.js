import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            pageNo: 1
        }
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&pageSize=15&page=${this.state.pageNo}&apiKey=dd02afa940f14a03bf97f09aadf8c984`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let newsData = await data.json();
        this.setState({
            articles: newsData.articles,
            loading: false
        })
        console.log("up",this.state.pageNo)
    }
    async componentDidMount() {
        this.updateNews();
    }
    nextPage = async ()=>{
        this.setState({
            pageNo: this.state.pageNo + 1,
            loading: true
        });
        setTimeout(()=>{
            this.updateNews()
        },300);
    }
    prevPage = async()=>{
        this.setState({
            pageNo: this.state.pageNo - 1,
            loading: true
        });
        setTimeout(()=>{
            this.updateNews()
        },300);
    }
    render() {
        return (
            <div className="container">
                <div className="mx-3 mt-3 mb-0">
                    <h2 className="text-center">Top HeadLines - {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1).replace('+', ' ')}</h2>
                </div>
                {this.state.loading && <Spinner />}
                {!(this.state.loading) && <div className="d-flex flex-wrap">
                    {
                        this.state.articles.map((element) => {
                            return (
                                <NewsItems key={element.url} url={element.url} name={element.source.name.slice(0, 20)} author={element.author || "Unknown"} title={element.title.slice(0, 60)} published={new Date(element.publishedAt).toGMTString()} description={element.description && element.description.slice(0, 90)} imageUrl={element.urlToImage} />
                            )
                        })
                    }
                    <div className="container d-flex justify-content-around m-4">
                        <button type="button" className="btn btn-primary" disabled={this.state.pageNo < 2} onClick={this.prevPage}> &larr; Previous</button>
                        <button type="button" className="btn btn-outline-dark px-5">{this.state.pageNo}</button>
                        <button disabled={this.state.pageNo > 5} type="button" className="btn btn-primary" onClick={this.nextPage}>Next &rarr;</button>
                    </div>
                </div>}
            </div>
        )
    }
}