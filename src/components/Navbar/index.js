import React from 'react';

const Navbar = () => {
	return (
		<header className="flex-row px-1">
			<div className="navBar container">
				<div className="navLogo">
					<a href="/">dBull_ATX</a>
				</div>
				<div className="navLinks">
					<a href="#About"> About Me </a>
					<a href="#Projects"> Projects </a>
					<a href="#Contact"> Contact </a>
					<a href="#Resume"> Resume </a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
