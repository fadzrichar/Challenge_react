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

class Home extends Component {
	state = {
		listTopNews: [],
		listEverything : [],
		isLoading: true,
	};

	componentDidMount = () => {
		this.topArticle();
		this.everything()
	};

	everything = () => {
		const self = this;
		axios
		.get(urlEverything)
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

	topArticle = () => {
		const self = this;
		axios
		.get(urlHeadline)
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

		const everyNews = topEvery.map((item, key) => {
			return (
				<ListNews
					keyList={key}
					titleList={item.title}
					imgList={item.urlToImage}
					contentList={item.description}
					urlList={item.url}
					timeList={item.publishedAt}
				/>
			);
		});

	return (
		<div>
			<Header />
			<div className="container" style={{marginTop:"70px"}}>
				<div className="row ">
					<div className="col-5">
						{isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : everyNews}
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

export default Home;