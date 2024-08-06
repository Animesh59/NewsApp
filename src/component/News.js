import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';

class News extends Component {

    constructor() {
        super();
        console.log('------constructor------');
        this.state = {
            articles: [],
            loading: false,
            totalResults: 0,
            availablePages: 0,
            pageSize: 6,
            page: 1
        }
    }

    async componentDidMount() {
        console.log('\n\n------life cycle method------');
        // const url = `https://newsapi.org/v2/everything?q=business&pageSize=13&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=10&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        this.setState({ loading: true });
        let metaData = await fetch(url);
        let data = await metaData.json();
        // setTimeout(() => {
        this.setState({
            loading: false,
            articles: data.articles,
            totalResults: data.totalResults,
            availablePages: Math.ceil(data.totalResults / this.state.pageSize)
        })
        // }, 2000);
    }

    handleNext = async () => {
        console.log('\n\nnext');
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page + 1}&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        this.setState({ loading: true });
        let metaData = await fetch(url);
        let data = await metaData.json();
        this.setState({
            loading: false,
            page: this.state.page + 1,
            articles: data.articles
        })
    }

    handlePrev = async () => {
        console.log('\n\nprev');
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page - 1}&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        this.setState({ loading: true });
        let metaData = await fetch(url);
        let data = await metaData.json();
        this.setState({
            loading: false,
            page: this.state.page - 1,
            articles: data.articles
        })
    }
    render() {
        console.log('``````` News Rendered ```````');
        // console.log(this.state.articles)
        console.log(`loading: ${this.state.loading} , totalResults: ${this.state.totalResults} , pageSize: ${this.state.pageSize} , availablePages: ${this.state.availablePages} , page: ${this.state.page}`);

        return (
            <>
                <div className='container my-3'>
                    <h2 className='text-center'>--- Top Highlighted News ---</h2>
                    <div className='row mt-5'>
                        {this.state.loading ? <Loader /> : this.state.articles.map((article) => {
                            return (
                                < div key={article.url} className='col-md-4 my-3' >
                                    <NewsItem article={article} />
                                </div>
                            )
                        })}
                    </div>
                    <section className='d-flex justify-content-between align-items-center'>
                        <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-info">&laquo; previous</button>
                        <span>{this.state.page}/{this.state.availablePages}</span>
                        <button disabled={this.state.page >= this.state.availablePages} onClick={this.handleNext} type="button" className="btn btn-info">next &raquo;</button>
                    </section>
                </div >
            </>
        )
    }
}


export default News;
