import createStore from "unistore";
import axios from "axios";

// Initiate new store state
const initState = {
    listTopNews: [],
    listEverything : [],
	isLoading: true,
	paramsCategory: '',
    apiKey: "293e5a8d202a42f788880487d3bc4c2e",
	baseUrl: "https://newsapi.org/v2/",
	email: '',
	password: ''
}

export const store = createStore(initState);

export const actions = store => ({
	// Set dynamic category
	setCategory: (state, category) => {
		return {paramsCategory : category}
	},

    // Define everything function for listnews everything in Home pages
    everything : (state,event) => {
		const urlEverything = state.baseUrl + "everything?domains=wsj.com,nytimes.com&apiKey=" + state.apiKey;
		const self = store;
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
	},

	// Define everything function for listnews everything in newsCategory pages
	everythingCategory : async (state,event) => {
		const urlEverything = state.baseUrl + "everything?domains=wsj.com,nytimes.com&apiKey=" + state.apiKey;
		const self = store;
		await axios
		.get(urlEverything + "&q=" + state.paramsCategory)
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
	},

    // Define topArticle function for listnews top headlines in Home pages
    topArticle : (state,event) => {
		const urlHeadline = state.baseUrl + "top-headlines?country=us&pageSize=5&apiKey=" + state.apiKey;
		const self = store;
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
    },
	
	// Define topArticle function for listnews top headlines in newsCategory pages
	topArticleCategory : async (state,event) => {
		const urlHeadline = state.baseUrl + "top-headlines?country=us&pageSize=5&apiKey=" + state.apiKey;
		const self = store;
		await axios
		.get(urlHeadline + "&category=" + state.paramsCategory)
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
	},

	handleInputChange : async (state, event) => {
		let value = event.target.value;
		console.warn("value check", value);
		const self = store;
		if (value.length > 3) {
			try {
				const response = await axios.get(
					state.baseUrl + "everything?q=" + value + "&apiKey=" + state.apiKey
				);
				self.setState({ listTopNews: response.data.articles });
			}	catch (error) {
				console.error(error);
			}
		}
	}
})