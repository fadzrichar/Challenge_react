
import React, { Component } from 'react';
import "../style/style.css";
import "../style/bootstrap.min.css";

const list_article = [{number:"#1",title:"Liverpool breaking records and opponents' resolve"},
                  {number:"#2",title:"These high-speed ice skaters hit hills and dips at 50 mph"},
                  {number:"#3",title:"Vandals topple Zlatan Ibrahimovic statue in Sweden"},
                  {number:"#4",title:"Yamaha's steely supremo return to MotoGP glory"},
                  {number:"#5",title:"Revolutionary 'flying' yachts take Auld Mug into new realm"}]

class ListNews extends Component {
  render() {
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
                {list_article.map(data => (
                    <li className="top-article-list-map">
                        <p>{data.number}</p>
                        <a href="#">{data.title}</a>
                    </li>
                  )
                )}
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