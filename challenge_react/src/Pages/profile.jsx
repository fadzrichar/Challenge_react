import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Custom Components
import Header from "../Components/header";

const Profile = props => {
    const login_status = JSON.parse(localStorage.getItem("login_status"));
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const fullname = localStorage.getItem("fullname");
    const email = localStorage.getItem("email");
    console.warn("login_status", login_status);
    if (login_status === null) {
        return <Redirect to={{ pathname: "/signin"}} />;
    } else {
        return (
        <React.Fragment>
            <Header {...props} />
            <div className="container profile align-content-center" style={{marginTop:"100px"}}>
                <h1 style={{textAlign:"center"}}>PROFILE</h1>
                <p>
                    <label>Firstname:</label> {firstname}
                </p>
                <p>
                    <label>Lastname:</label> {lastname}
                </p>
                <p>
                    <label>Fullname:</label> {fullname}
                </p>
                <p>
                    <label>Email:</label> {email}
                </p>
            </div>
        </React.Fragment>
        );
    }
};

export default Profile;