import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
    			<a className="navbar-brand">Start Bootstrap</a>
				<div className="d-flex">
					<a className="nav-item nav-link text-white" href="#">Home</a>
					<a className="nav-item nav-link text-white" href="#">About</a>
					<a className="nav-item nav-link text-white" href="#">Services</a>
					<a className="nav-item nav-link text-white" href="#">Contact</a>
				</div>
  			</div>
		</nav>
	)
};