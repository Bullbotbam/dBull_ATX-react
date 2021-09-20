import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarDown">
				<IconButton className="icon-btn">
					<Twitter fontSize="medium" />
				</IconButton>
				<IconButton className="icon-btn">
					<Instagram fontSize="medium" />
				</IconButton>
				<IconButton className="icon-btn">
					<LinkedIn fontSize="medium" />
				</IconButton>
				<IconButton className="icon-btn">
					<GitHub fontSize="medium" />
				</IconButton>
				<IconButton className="icon-btn">
					<MailIcon fontSize="medium" />
				</IconButton>
			</div>
		</div>
	);
};

export default Sidebar;
