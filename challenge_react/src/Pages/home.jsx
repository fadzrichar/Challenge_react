import React, { Component } from "react";

// Import STORE RESOURCES
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// Custom Components
import Header from "../Components/header";
import ListNews from "../Components/listNews";
import TopNews from "../Components/topNews";

class Home extends Component {
	componentDidMount = () => {
		this.props.topArticle();
		this.props.everything()
	};

	render() {		
		const topHeadlines = this.props.listTopNews.filter(item => {
			if (item.content !== null && item.image !== null) {
				return item;
			}
			return false;
		})

		const headlineNews = topHeadlines.map((item, key) => {
			return (
				<TopNews
					key={key}
					title={item.title}
					img={item.urlToImage}
					content={item.description}
					url={item.url}
					time={item.publishedAt}
				/>
			);
		});

		const topEvery = this.props.listEverything.filter(item => {
			if (item.content !== null && item.image !== null) {
				return item;
			}
			return false;
		})

	return (
		<div>
			<Header 
			doSearch={event => this.props.handleInputChange(event)}
			{...this.props}
			/>
			<div className="container" style={{marginTop:"70px"}}>
				<div className="row ">
					<div className="col-5">
						<ListNews req_article={topEvery} />
					</div>
					<div className="col-7">
						{this.props.isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}               
					</div>
				</div>
			</div>
		</div>
	  );
	}
}

export default connect(
	"listTopNews, listEverything, isLoading, apiKey, baseUrl",
	actions
)(withRouter(Home));