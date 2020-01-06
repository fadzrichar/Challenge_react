import React, { Component } from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";

class Search extends Component {
	render() {
	  return (
		<div class="input-group md-form form-sm form-2 pl-0">
          <form class="form-inline mr-auto">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success btn-rounded btn-sm my-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
      </div>
	  );
	}
  }
  
export default Search;