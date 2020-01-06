import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class AboutSection extends Component {
	render() {
	  return (
		<div>
			<section className="container-fluid exp-head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="exp-h1 text-uppercase">About me</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row about-gap25"></div>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-12">
                            <div className="about-information">
                            <p>Versatile Front-end Developer with 3+ years of experience designing, 
                            developing, and managing complex e-commerce sites and internal frameworks.
                            Specializes in AngularJS and responsive design. </p>
                            </div>
                            <div className="about-education">
                                <h3>Edcuation</h3>
                                <ul className="about-education-list">
                                    <li className="about-education-tahun"><strong>2014</strong></li>
                                        <ul className="about-education-detail list-unstyled">
                                            <li><strong>DIPLOMA</strong></li>
                                            <li>Computer Engineering - University of Chicago</li>        
                                        </ul>
                                    <li className="about-education-tahun"><strong>2018</strong></li>
                                        <ul className="about-education-detail list-unstyled">
                                            <li><strong>BACHELOR DEGREE</strong></li>
                                            <li>BS Computer Engineering - University of Chicago</li>            
                                        </ul>
                                </ul>
                            </div>
                            <div className="about-table">
                                <span>Here's few technologies I've been working with recently</span>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>HTML & CSS</td>
                                            <td>Serverless</td>
                                            <td>Scrum</td>
                                        </tr>
                                        <tr>
                                            <td>Programming</td>
                                            <td>Restful API</td>
                                            <td>Test-Driven Dev</td>
                                        </tr>
                                        <tr>
                                            <td>Database</td>
                                            <td>Javascript</td>
                                            <td>Software Testing</td>
                                        </tr>
                                        <tr>
                                            <td>Git & Github</td>
                                            <td>Single Page App</td>
                                            <td>UX/UI Designer</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image-2">
                            <img className="image-women" src={require("../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} alt="person_photo"></img>
                            <img className="image-dot" src={require("../img/img-dot.png")} alt="dotimg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row about-gap120"></div>
                </div>
            </section>
		</div>
	  );
	}
  }
  
export default AboutSection;