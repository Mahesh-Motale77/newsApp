import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgURL, author, date, source} = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex:'1'}}>
                        {source}
                    </span>
                    <img src={imgURL ? imgURL : "https://static.toiimg.com/thumb/msid-108982071,width-1070,height-580,imgsize-24700,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary"> by {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a href="#" className="btn btn-sm btn-secondary">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
