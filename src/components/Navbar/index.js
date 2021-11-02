import * as React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Box,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export default function SearchBar() {
	const navStyle = {
		color: '#757575',
		margin: '20px',
	};
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ backgroundColor: '#757575' }}>
				<Toolbar>
					<IconButton
						size=""
						edge="end"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon style={{ fontSize: '3rem' }} />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClick={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<Link to="/" style={{ textDecoration: 'none', color: '#757575' }}>
							<MenuItem className={navStyle}>Home</MenuItem>
						</Link>

						<Link
							to="/projects"
							style={{ textDecoration: 'none', color: '#757575' }}
						>
							<MenuItem className={navStyle}>Projects</MenuItem>
						</Link>

						<Link
							to="/contact"
							style={{ textDecoration: 'none', color: '#757575' }}
						>
							<MenuItem className={navStyle}>Hit Me Up </MenuItem>
						</Link>
						<Link
							to="/resume"
							style={{ textDecoration: 'none', color: '#757575' }}
						>
							<MenuItem className={navStyle}> Resume </MenuItem>
						</Link>
					</Menu>
					<Typography
						variant="h6"
						noWrap
						component="div"
						textAlign="start"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Link
							to="/"
							style={{
								fontFamily: 'fantasy',
								fontSize: '2rem',
								textDecoration: 'none',
								padding: '0.5rem 1rem',
								borderRadius: '.5rem',
								border: 'none',
								outline: 'none',
								cursor: 'pointer',
								margin: '0 3rem',
								color: '#fff',
							}}
						>
							Donald Bull
							<span role="img" aria-label="bull" style={{ margin: '0 .5rem' }}>
								🐂
							</span>
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
