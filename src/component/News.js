import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor() {
        super();
        console.log('------constructor------');
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        console.log('------life cycle method------');
        const url = `https://newsapi.org/v2/everything?q=business&pageSize=13&apiKey=4a06ae9f8783415ab54b4b5bd2f18278`;
        let metaData = await fetch(url);
        let data = await metaData.json();
        setTimeout(() => {
            this.setState({
                articles: data.articles
            })
        }, 10000);
    }

    render() {
        console.log('``````` News Rendered ```````');
        console.log(this.state.articles)
        return (
            <>
                <div className='container my-3'>
                    <h2 className='text-center'>--- Top Highlighted News ---</h2>
                    <div className='row mt-5'>
                        {this.state.articles.map((article) => {
                            return (
                                < div key={article.url} className='col-md-4 my-3' >
                                    <NewsItem article={article} />
                                </div>
                            )
                        })}
                    </div>
                </div >
            </>
        )
    }
}


export default News;
