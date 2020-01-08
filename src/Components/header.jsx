import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Search from "./search";

class Header extends Component {
    handleRouterHeader = categoryName => {
        const category = categoryName;
        this.props.history.replace("/news-category/" + category);
    };

    postLogout = () => {
        localStorage.removeItem("login_status");
        this.props.history.push("/");
    };

	render() {
	  return (
		<div>
			<header className="header border-bottom fixed-top">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-2 header-logo">
							<ul className="header-title list-unstyled">
                                <li>
                                    <img src={require("../Image/logoreact.png")} style={{height: "50px"}}alt="logoreact"></img>
                                </li>
                                <li>
                                    <Link to="/">KabarKabar</Link>
                                </li>
                            </ul>
						</div>
                        <div className="col-4">
                            <ul className="header-nav-bar list-unstyled">
                                <li
                                    className="menu"
                                    value="sport"
                                    onClick={
                                    this.props.isCategoryNews !== undefined
                                        ? () => this.props.handleRouter("sports")
                                        : () => this.handleRouterHeader("sports")
                                    }
                                >
                                    Sports
                                </li>
                                <li
                                    className="menu"
                                    value="business"
                                    onClick={
                                    this.props.isCategoryNews !== undefined
                                        ? () => this.props.handleRouter("business")
                                        : () => this.handleRouterHeader("business")
                                    }
                                >
                                    Economy
                                </li>
                                <li
                                    className="menu"
                                    value="politic"
                                    onClick={
                                    this.props.isCategoryNews !== undefined
                                        ? () => this.props.handleRouter("politics")
                                        : () => this.handleRouterHeader("politics")
                                    }
                                >
                                    Politic
                                </li>
                                <li
                                    className="menu"
                                    value="entertainment"
                                    onClick={
                                    this.props.isCategoryNews !== undefined
                                        ? () => this.props.handleRouter("entertainment")
                                        : () => this.handleRouterHeader("entertainment")
                                    }
                                >
                                    Entertainment
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <Search {...this.props}/>
                        </div>
                        <div className="col-3 justify-content-between">
                        <ul className="header-nav-bar list-unstyled">
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li className="menu">
                                    {localStorage.login_status == null ? <link></link> :
                                    <Link onClick={this.postLogout}>Logout</Link>
                                    }
                                </li>
                            </ul>
                        </div>
					</div>
                </div>
			</header>
		</div>
	  );
	}
  }
  
export default Header;