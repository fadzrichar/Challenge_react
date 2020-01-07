
import React, { Component } from 'react';
import "../style/style.css";
import "../style/bootstrap.min.css";

class ListNews extends Component {
  render() {
    const list_everything = this.props.req_article

    console.warn("check props render listNews", this.props)
    return (
        <div className="top-article">
          <div className="row top-article-h">
            <div className="col-8 top-article-head">
              <span>BERITA TERKINI</span>
            </div>
            <div className="col-4 top-article-head">
              <a href="#">lihat semua</a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="top-article-list list-unstyled">
                {list_everything.slice(0,5).map((data,key) => (
                  <li className="top-article-list-map">
                    <p>#{(key+1)}</p>
                    <a href={data.url}>{data.title}</a>
                 </li>
                ))}      
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default ListNews;