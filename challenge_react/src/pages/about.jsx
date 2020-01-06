import React, { Component } from "react";
import Header from "../components/header";
import AboutSection from "../components/aboutSection";
import Footer from "../components/footer";

class About extends Component {
    render() {
    return (
        <div className="About">
            <Header />
            <AboutSection />
            <Footer />
        </div>
      );
    }
}

export default About;