import React from 'react';

const Navbar = () => {
	return (
		<div className="navBar container">
			<div className="navLogo">
				<a href="/">dBull_ATX</a>
			</div>
			<div className="navLinks">
				<a href="/"> About Me </a>
				<a href="/"> Projects </a>
				<a href="/"> Contact </a>
				<a href="/"> Resume </a>
			</div>
		</div>
	);
};

export default Navbar;
