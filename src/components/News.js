import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            pageNo: 1,
            totalResult: 0
        }
        document.title = props.category.charAt(0).toUpperCase() + this.props.category.slice(1).replace('+', ' ')+" - Top Headlines";
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&pageSize=15&page=${this.state.pageNo}&language=en&sortBy=publishedAt&apiKey=${this.props.apiKey}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let newsData = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: newsData.articles,
            loading: false,
            totalResult: newsData.totalResults
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&pageSize=15&page=${this.state.pageNo+1}&language=en&sortBy=publisheAt&apiKey=${this.props.apiKey}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let newsData = await data.json();
        setTimeout(() => {
            this.setState({
                articles: this.state.articles.concat(newsData.articles),
                loading: false,
                pageNo: this.state.pageNo + 1
            })
        }, 500);
    }
    render() {
        return (
            <div className="container">
                <div className="mx-3 mt-3 mb-0">
                    <h2 className="text-center">Top HeadLines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).replace('+', ' ')}</h2>
                </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={90 >  this.state.articles.length}
                    loader={<Spinner/>}
                    >
                    <div className="d-flex flex-wrap">
                        {
                            this.state.articles.map((element) => {
                                return (
                                    <NewsItems key={element.url} url={element.url} name={element.source.name.slice(0, 20)} author={(element.author && element.author.slice(0,20)) || "Unknown"} title={element.title.slice(0, 60)} published={new Date(element.publishedAt).toGMTString()} description={element.description && element.description.slice(0, 90)} imageUrl={element.urlToImage} />
                                )
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}