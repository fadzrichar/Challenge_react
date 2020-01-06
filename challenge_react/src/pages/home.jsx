import React, { Component } from "react";
import Header from "../components/header";
import HomeSection from "../components/homeSection";

class Home extends Component {
    render() {
    return (
        <div className="Home">
            <Header />
            <HomeSection />
        </div>
      );
    }
}

export default Home;