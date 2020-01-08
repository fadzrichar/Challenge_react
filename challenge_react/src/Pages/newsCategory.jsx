import React, { Component } from "react";
import axios from "axios";

// Import STORE RESOURCES
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// Custom Components
import Header from "../Components/header";
import ListNews from "../Components/listNews";
import TopNews from "../Components/topNews";

class NewsCategory extends Component {
	handleRouterCategoryNews = async categoryName => {
		const category = categoryName;
		await this.props.history.replace("/news-category/" + category);
		await this.props.setCategory(this.props.match.params.category)
		console.log(this.props.paramsCategory)
		this.props.everythingCategory();
		this.props.topArticleCategory()
	}

	componentDidMount = () => {
		this.props.everythingCategory();
		this.props.topArticleCategory()
	};

	handleInputChange = async event => {
		let value = event.target.value;
		console.warn("value check", value);
		await this.setState({ search: value });
		this.searchNews(value);
	};

	searchNews = async keyword => {
		const self = this;
		if (keyword.length > 3) {
			try {
				const response = await axios.get(
					this.props.baseUrl + "everything?q=" + keyword + "&apiKey=" + this.props.apiKey
				);
				self.setState({ listTopNews: response.data.articles });
			}	catch (error) {
				console.error(error);
			}
		}
	}

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
			handleRouter={e => this.handleRouterCategoryNews(e)}
			isCategoryNews={true}
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
	"listTopNews, listEverything, isLoading, apiKey, baseUrl, paramsCategory",
	actions
)(withRouter(NewsCategory));