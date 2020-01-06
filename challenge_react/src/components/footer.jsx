import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class Footer extends Component {
	render() {
	  return (
		<div>
			<footer>
                <div className="container align-items-center">
                    <div className="row align-items-center">
                        <div className="col-md-4 justify-content-center d-flex">
                            <img src={require("../img/logo-ALTA-v2.png")} style={{height: "50px"}} alt="logoaltav2"></img>
                        </div>
                        <div className="col-md-4 footer-socmed">
                            <div className="row align-items-center">
                                <div className="footer-socmed-title">Social Media</div><br />
                            </div>
                            <div className="row footer-socmed">    
                                <ul className="footer-socmed-list list-unstyled">
                                    <li><a href="https://www.facebook.com/alterra.id/"><img src={require("../img/ic_fb.png")} alt="fbicon"></img></a></li>
                                    <li><a href="https://twitter.com/alterraid?lang=en"><img src={require("../img/ic-twitter.png")} alt="twittericon"></img></a></li>
                                    <li><a href="https://www.instagram.com/alterra.id/"><img src={require("../img/ic-instagram.png")} alt="igicon"></img></a></li>
                                    <li><a href="https://www.linkedin.com/company/alterraid"><img src={require("../img/ic-linkedin.png")} alt="linkedinicon"></img></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 vl"> 
                            <div className="d-flex justify-content-center">
                                <h5 className="copyright">Copyright &copy; 2019 Alterra</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
		</div>
	  );
	}
  }
  
export default Footer;