import React from "react";
import "./Nav.css";
import logo from '../static/logo.svg'; 
import lady from '../static/lady.jpeg'

// Navigation Container 
function App() {
	return (
		<nav className="bg-light shadow">
			<div className="row p-3">
				<div className="col-md-1 text-center">
					<img src={logo} alt="" className="logo" />
				</div>
				<div className="col-md-8 nav-search">
					<form className="form-inline my-3">
						<input
							className="form-control w-90"
							type="search"
							placeholder="Search for .."
							aria-label="Search"
						/>
					</form>
				</div>
				<div className="col-md-3 signin text-center">
					<img src={lady} alt="" srcset="" />
					<span className="px-2 font-weight-bold">Bidyashish Kumar</span>
				</div>
			</div>
		</nav>
	);
}

export default App;
