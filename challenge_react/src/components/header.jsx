import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class Header extends Component {
	render() {
	  return (
		<div>
			<header className="border-bottom fixed-top">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-12 col-sm-3 logo">
							<img src={require("../img/logo-ALTA.png")} style={{height: "100%"}} alt="logoalta"></img>
						</div>
						<div className="col-md-9 col-12 col-sm-9 d-flex justify-content-end">
							<nav className="navbar navbar-expand-lg">
								<ul className="navbar-nav mr-auto nav-mobile">
									<li className="nav-item font-weight-bold">
										<a href="index.html" className="nav-link active">HOME</a>
									</li>
									<li className="nav-item">
										<a href="about.html" className="nav-link">ABOUT</a>
									</li>
									<li className="nav-item">
										<a href="experience.html" className="nav-link">EXPERIENCE</a>
									</li>
									<li className="nav-item">
										<a href="contact.html" className="nav-link">CONTACT</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	  );
	}
  }
  
export default Header;