import React, { Component } from 'react';


class NewsItem extends Component {

    render() {
        console.log('``````` NewsItem Rendered ```````');
        var { urlToImage, title, description, url } = this.props.article;
        return (
            <>
                <div className="card" style={{ width: "18rem", marginLeft: "5px" }}>
                    <img src={urlToImage ? urlToImage : "https://media.istockphoto.com/id/157399872/photo/news.webp?b=1&s=170667a&w=0&k=20&c=PGyIbgCz9yjbBK70ypjZinJLPK5O_jGvRTfW1xNkSiA="} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>

            </>
        )
    }
}


export default NewsItem;
