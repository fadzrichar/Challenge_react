import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../Pages/home";
import SignIn from "../Pages/signIn";
import Profile from "../Pages/profile";
import NewsCategory from "../Pages/newsCategory";
import NotFound from "../Pages/notFound";

const MainRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/profile" component={Profile} />
				<Route path="/news-category/:category" component={NewsCategory} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRoute;