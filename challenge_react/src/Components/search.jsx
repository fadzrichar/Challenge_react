import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class Search extends Component {
	render() {
	  return (
		<div className="input-group md-form form-sm form-2 pl-0">
          <form className="form-inline mr-auto">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success btn-rounded btn-sm my-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button> */}
          </form>
      </div>
	  );
	}
  }
  
export default Search;