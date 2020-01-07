
import React, { Component } from 'react';
import "../style/style.css";
import "../style/bootstrap.min.css";

class ListNews extends Component {
  render() {
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
                    <li className="top-article-list-map">
                        <p>#{this.props.keyList}</p>
                        <a href="#">{this.props.titleList}</a>
                    </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

// const style = {
//   maxWidth: "180px"
// };

// const ListNews = props => {
//   const url = props.url !== null || props.url !== "" ? props.url : "#";
//   const target = props.url !== null || props.url !== "" ? { target: "_blank" } : "";
//   return (
//     <section className="content">
//       <h3>
//         <a href={url} {...target}>
//           {props.title}
//         </a>
//       </h3>
//       <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
//       <div className="right">{props.content}</div>
//     </section>
//   );
// };

// ListNews.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   img: PropTypes.string
// };

export default ListNews;