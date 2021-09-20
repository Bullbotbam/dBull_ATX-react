import React from 'react';
import { Avatar } from '@material-ui/core';
import coverImage from '../../assets/cover/dbull_atx_logo.png';

const Navbar = (props) => {
	const { contactSelected, setContactSelected } = props;

	return (
		<header className="navBar container">
			<h2>
				<Avatar
					alt="dbull avatar"
					src={coverImage}
					sx={{
						width: 64,
						height: 64,
					}}
				/>
			</h2>
			<nav className=" flex-row">
				<ul className=" flex-row">
					<li className="navLinks mx-2">
						<a href="#about" onClick={() => setContactSelected(false)}>
							About Me
						</a>
					</li>
					<li className="navLinks mx-2">
						<a href="#projects">Projects</a>
					</li>
					<li className="navLinks  mx-2">
						<a href="#contact" onClick={() => setContactSelected(true)}>
							Contact
						</a>
					</li>

					<li className="navLinks mx-2">
						<a href="/"> Resume </a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
