import createStore from "unistore";
import axios from "axios";

// Initiate new store state
const initState = {
    listTopNews: [],
    listEverything : [],
    isLoading: true,
    apiKey: "293e5a8d202a42f788880487d3bc4c2e",
    baseUrl: "https://newsapi.org/v2/"
}

export const store = createStore(initState);

export const actions = store => ({
    // Define everything function for listnews everything
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

    // Define topArticle function for listnews top headlines
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
    }
    
});
