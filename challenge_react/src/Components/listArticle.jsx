import React, { Component } from 'react';
import "../style/style.css";
import "../style/bootstrap.min.css";

class ListArticle extends Component {
  render() {
    return (
    <div className="col-12 list">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="row">
            <img id="" className="image1" src={require('../Image/curtis_jones_liverpool.jpg')} alt="curtisjoneslfc" />
        </div>
        <div className="row">
            <h3 className="title">
            Teenager Curtis Jones helps Liverpool beat Everton with sensational goal
            </h3><br/>
        </div>
        <div className="row">
            <p className="article">
            A wonder goal from 18-year-old Curtis Jones helped Liverpool to a 1-0 victory over Merseyside rival Everton in the FA Cup.
            </p>
        </div>
        <div className="row">
            <p className="published">
            Last updated 3 mins ago
            </p>
        </div>
        <div className="row feature">
            <div className="col-4">
                <a href="#"><i class="fa fa-heart"></i></a>
            </div>
            <div className="col-4">
                <a href="#"><i class="fa fa-share-alt"></i></a>
            </div>
            <div className="col-4">
                <a href="#"><i class="fa fa-thumbs-down"></i></a>
            </div>
        </div>
    </div>
        
    );
  }
}

export default ListArticle;