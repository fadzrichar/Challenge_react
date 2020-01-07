import React, { Component } from "react";
import axios from "axios";

// Custom Components
import Header from "../Components/header";

class SignIn extends Component {
	state = { email: "", password: ""};
	changeInput = e => {
		this.setState({ [e.target.name]: e.target.value});
		console.warn("check target", e.target.value);
	};

	postLogin = () => {
		const {email, password} = this.state;
		const data = {
			email: email,
			password: password
		};
		const self = this;
		axios
			.post("https://fadzrilogin.free.beeceptor.com/login", data)
			.then(async function(response) {
				console.log(response.data);
				if (response.data.hasOwnProperty("api_key")) {
					await localStorage.setItem("api_key", response.data.api_key);
					localStorage.setItem("login_status", true);
					localStorage.setItem("firstname", response.data.firstname);
					localStorage.setItem("lastname", response.data.lastname);
					localStorage.setItem("fullname", response.data.fullname);
					localStorage.setItem("email", response.data.email);
					self.props.history.push("/profile");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	render() {
		console.warn("check state", this.state);
		return (
		<React.Fragment>
			<Header {...this.props}/>
			<div className="container signin align-content-center" style={{marginTop:"100px"}}>
				<form onSubmit={e => e.preventDefault()}>
					<h3>Input your valid mail and password</h3>
					<div className="signin-input">
						<label for="email">Input your Email address</label><br/>
						<input 
							type="text"  
							name="email" 
							placeholder="example@alterra.id" 
							onChange={e => this.changeInput(e)} 
						/>
					</div>
					<div>
					<label for="password">Input your password</label><br/>
						<input 
							type="password"  
							name="password" 
							placeholder="*******" 
							onChange={e => this.changeInput(e)} 
						/>
					</div>
					<button style={{border:"1px solid #ececec", borderRadius:"20%"}} onClick={() => this.postLogin()}>LOGIN</button>
				</form>
			</div>
		</React.Fragment>
		)
	}
}

export default SignIn;