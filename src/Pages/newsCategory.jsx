import React, { Component } from "react";
import axios from "axios";

// Custom Components
import Header from "../Components/header";
import ListNews from "../Components/listNews";
import TopNews from "../Components/topNews";

// NEWS API
const apiKey = "293e5a8d202a42f788880487d3bc4c2e";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&pageSize=5&apiKey=" + apiKey;
const urlEverything = baseUrl + "everything?domains=wsj.com,nytimes.com&apiKey=" + apiKey;

class NewsCategory extends Component {
	state = {
		listTopNews: [],
		listEverything : [],
		isLoading: true,
	};

    handleRouterCategoryNews = async categoryName => {
        const category = categoryName;
        await this.props.history.replace("/news-category/" + category);
        this.everything();
        this.topArticle();
    }

	componentDidMount = () => {
		this.topArticle();
		this.everything()
	};

	everything = async () => {
        const paramCategory = await this.props.match.params.category;
		const self = this;
		await axios
		.get(urlEverything + "&q=" + paramCategory)
		.then(function(response) {
		  self.setState({ listEverything: response.data.articles, isLoading: false });
		  // handle success
		  console.log(response.data);
		})
		.catch(function(error) {
		  self.setState({ isLoading: false });
		  // handle error
		  console.log(error);
		});
	}

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
					baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
				);
				self.setState({ listTopNews: response.data.articles });
			}	catch (error) {
				console.error(error);
			}
		}
	};

	topArticle = async () => {
        const paramCategory = this.props.match.params.category;
		const self = this;
		await axios
		.get(urlHeadline + "&category=" + paramCategory)
		.then(function(response) {
		  self.setState({ listTopNews: response.data.articles, isLoading: false });
		  // handle success
		  console.log(response.data);
		})
		.catch(function(error) {
		  self.setState({ isLoading: false });
		  // handle error
		  console.log(error);
		});
	}

	render() {
		const { listTopNews, listEverything, isLoading } = this.state;
		
		const topHeadlines = listTopNews.filter(item => {
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

		const topEvery = listEverything.filter(item => {
			if (item.content !== null && item.image !== null) {
				return item;
			}
			return false;
		})

	return (
		<div>
			<Header 
            doSearch={event => this.handleInputChange(event)}
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
						{isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}               
					</div>
				</div>
			</div>
		</div>
	  );
	}
}

export default NewsCategory;