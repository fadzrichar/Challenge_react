import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class HomeSection extends Component {
	render() {
	  return (
		<div>
			<section className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-12 d-flex main-bg align-items-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-5 col-sm-5 d-flex justify-content-end align-items-center">
									<img src={require("../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} className="main-image rounded-circle" alt="person_photo"></img>
								</div>
								<div className="col-lg-8 col-md-7 col-sm-7 d-flex align-items-center">
									<div className="main-intro">
										<h5 className="main-h5">Hi, my name is</h5>
										<h1 className="main-h1">Anne Sullivan</h1>
										<h3 className="main-h3">I build things for the web</h3>
										<br />
										<a href="contact.html" className="btn main-btn">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	  );
	}
}
  
export default HomeSection;