import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Search from "./search";

class Header extends Component {
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
                                <li>
                                    <a href="#">Sepakbola</a>
                                </li>
                                <li>
                                    <a href="#">Ekonomi</a>
                                </li>
                                <li>
                                    <a href="#">Politik</a>
                                </li>
                                <li>
                                    <a href="#">Hiburan</a>
                                </li>
                                <li>
                                    <a href="#">Lainnya</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <Search />
                        </div>
                        <div className="col-2 justify-content-between">
                        <ul className="header-nav-bar list-unstyled">
                                <li>
                                    <Link to="/signin">Masuk</Link>
                                </li>
                                <li>
                                    <Link to="/signin">Daftar</Link>
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