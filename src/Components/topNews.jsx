import React, { Component } from 'react';
import "../style/style.css";
import "../style/bootstrap.min.css";

class TopNews extends Component {
  render() {
    const url = this.props.url !== null || this.props.url !== "" ? this.props.url : "#";

    return (
    <div className="col-12 list">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="row">
            <img id="" className="image1" src={this.props.img} alt="imagenews" />
        </div>
        <div className="row">
            <h3 className="title">
                <a href={url}>{this.props.title}</a>
            </h3><br/>
        </div>
        <div className="row">
            <p className="article">
                {this.props.content}
            </p>
        </div>
        <div className="row">
            <p className="published">
            Last updated at {this.props.time}
            </p>
        </div>
        <div className="row feature">
            <div className="col-4">
                <a href="#"><i className="fa fa-heart"></i></a>
            </div>
            <div className="col-4">
                <a href="#"><i className="fa fa-share-alt"></i></a>
            </div>
            <div className="col-4">
                <a href="#"><i className="fa fa-thumbs-down"></i></a>
            </div>
        </div>
    </div>
        
    );
  }
}

export default TopNews;