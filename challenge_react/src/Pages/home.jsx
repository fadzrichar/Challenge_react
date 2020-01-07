import React, { Component } from "react";
import Header from "../Components/header";
import TopArticle from "../Components/topArticle";
import ListArticle from "../Components/listArticle";

class Home extends Component {
    render() {
    return (
        <div>
            <Header />
            <div className="container" style={{marginTop:"70px"}}>
                <div className="row ">
                    <div className="col-5">
                        <TopArticle />          
                    </div>
                    <div className="col-7">
                        <ListArticle />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Home;