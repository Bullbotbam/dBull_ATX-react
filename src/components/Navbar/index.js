import React from 'react';
import { Avatar } from '@material-ui/core';
import coverImage from '../../assets/cover/dbull_atx_logo.png';

const Navbar = () => {
	return (
		<div className="navBar container">
			<Avatar
				alt="dbull avatar"
				src={coverImage}
				sx={{
					width: 64,
					height: 64,
				}}
			/>
			<div className="navLinks">
				<a href="#about"> About Me </a>
				<a href="/"> Projects </a>
				<a href="/"> Contact </a>
				<a href="/"> Resume </a>
			</div>
		</div>
	);
};

export default Navbar;
