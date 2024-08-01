import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor() {
        super();
        console.log('------constructor------');
        this.state = {
            articles: [
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Medea Giordano",
                    "title": "The Top 5 Prime Day Deals on Amazon Kindles and Devices (2024)",
                    "description": "Amazon's shopping holiday is the best time to buy some of the brand's devices that we love.",
                    "url": "https://www.wired.com/story/prime-day-kindle-amazon-device-deals-2024/",
                    "urlToImage": "https://media.wired.com/photos/6692904100e4520425ea9543/191:100/w_1280,c_limit/ENTERTAINMENT-ESSENTIALS.png",
                    "publishedAt": "2024-07-16T08:52:33Z",
                    "content": "It's that time again. Amazon Prime Day is back. Among thousands of discounted items, from the necessary to the wacky, are the steep discounts on Amazon's own broad lineup of hardware, including Kindl… [+3389 chars]"
                }
            ],
            loading: false
        }
    }

    componentDidMount() {
        console.log('------life cycle method------');
        this.setState = {
            articles: [
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "How Banksy sparked a steel town's love for colour",
                    "description": "More than five years after a Banksy appeared in Port Talbot its street art community is thriving.",
                    "url": "https://www.bbc.com/news/articles/cerrz8edyd0o",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f8fe/live/de0ad900-4057-11ef-96a8-e710c6bfc866.jpg",
                    "publishedAt": "2024-07-12T22:04:12Z",
                    "content": "By Nicola Bryan, BBC News\r\nSeasons Greetings appeared on a steelworker's garage in Taibach, Port Talbot, in December 2018 \r\nWhen Banksy artwork Season's Greetings appeared on a garage in Port Talbot … [+7547 chars]"
                }
            ]
        }
    }

    render() {
        console.log('News');
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
