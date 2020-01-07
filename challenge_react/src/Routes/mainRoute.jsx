import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../Pages/home";
import SignIn from "../Pages/signIn";

const MainRoute = () => {
	return (
		<BrowserRouter>
			<switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signin" component={SignIn} />
				{/* <Route exact path="/profile" component={Profile} />
				<Route path="/news/:category" component={NewsCategory} />
				<Route component={NotMatch} /> */}
			</switch>
		</BrowserRouter>
	)
}

export default MainRoute;