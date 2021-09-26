import React from 'react';
import { Avatar } from '@material-ui/core';
import coverImage from '../../assets/cover/dbull_atx_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const navStyle = {
		color: 'white',
		margin: '20px',
	};
	return (
		<header className="navBar container">
			<h2>
				<Avatar
					style={{ height: '96px', width: '96px' }}
					alt="dbull avatar"
					src={coverImage}
				/>
			</h2>
			<nav>
				<ul className="navLinks">
					<Link style={navStyle} to="/about">
						<li>About </li>
					</Link>
					<Link style={navStyle} to="/projects">
						<li> Projects </li>
					</Link>
					<Link style={navStyle} to="/contact">
						<li> Contact </li>
					</Link>
					<Link style={navStyle} to="/resume">
						<li>Resume</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
