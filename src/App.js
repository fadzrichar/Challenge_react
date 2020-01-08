import React, { Component } from 'react';
import Home from "./Pages/home";
import MainRoute from "./Routes/mainRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <MainRoute />
      </div>
    );
  }
}

export default App;