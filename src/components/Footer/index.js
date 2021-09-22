import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
// import { EmailOutlinedIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Sidebar = () => {
	return (
		<footer className="sidebar">
			<div className="sidebarDown">
				<IconButton
					className="icon-btn"
					aria-label="Twitter.com"
					onClick={() => window.open('https://twitter.com/home?lang=en')}
				>
					<Twitter fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="Instagram.com"
					onClick={() => window.open('https://www.instagram.com/d.bull_atx/')}
				>
					<Instagram fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="LinkedIn.com"
					onClick={() =>
						window.open('https://www.linkedin.com/in/donaldjbull-atx/')
					}
				>
					<LinkedIn fontSize="large" />
				</IconButton>
				<IconButton
					className="icon-btn"
					aria-label="GitHub.com"
					onClick={() => window.open('https://github.com/Bullbotbam')}
				>
					<GitHub fontSize="large" />
				</IconButton>
				{/* <IconButton className="icon-btn">
					<EmailOutlinedIcon fontSize="large" />
				</IconButton> */}
			</div>
		</footer>
	);
};

export default Sidebar;
