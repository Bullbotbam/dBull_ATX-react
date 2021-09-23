import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Resume = () => {
	const classes = useStyles();

	return (
		<Container style={{ color: '#757575' }} className="resumeBody">
			<Typography variant="h4">Experience</Typography>
			<Typography variant="h5">
				dBull_ATX Austin, Texas Web Developer Present
			</Typography>
			<Typography variant="button">
				<li>
					Independent contractor building web content for a variety of clientel.
				</li>
				<li>
					Website development proposals, designing page layout, content
					management systems, develop client branding strategy.
				</li>
				<li>
					Skills used: HTM, CSS, JavaScript, JWT, Progressive Web App,
					Bootstrap, GraphQL, Local Storage, MySQL, User Authentication, MERN
					Stack (MongoDB, Express.js, React.js, Node.js)
				</li>
			</Typography>
			<br />
			<Typography variant="h5">
				Plateau Property Management Austin, Texas Facility Manager
			</Typography>
			<Typography variant="button">
				<li>
					Managed databases and company’s online presence as well as created
					content along with automation for over 25 HOA and COA communities.{' '}
				</li>
				<li>
					Created workflow policies that leveraged relationships troubleshoot
					challenges for external/internal customers.
				</li>
				<li>
					{' '}
					Supervised data collection of user database, community websites, event
					management CMS tools.{' '}
				</li>
				<li>Developed automated procedural RFP processes.</li>
				<li>
					{' '}
					Evaluated and administered all hardware, software installation, web
					applications enabled to operate client services.
				</li>
			</Typography>
			<br />
			<Typography variant="h5">
				American Business Machines Houston, Texas Director of Managed Print
				Services
			</Typography>
			<Typography variant="button">
				<li>
					Copier Technician with expertise in Hewlett-Packard Business products.
				</li>
				<li>Advanced Color Specialist, maintence system trainer.</li>
				<li>
					{' '}
					Field Supervisor, specializing in hardware Network connectivity.
				</li>
				<li>Developed ABM's printed media monitoring system.</li>
			</Typography>
			<Typography variant="h4">Education</Typography>
			<Typography variant="h5">
				University of Texas Austin, Texas Web Development
			</Typography>
			<Typography variant="button">Certificate </Typography>

			<Typography variant="h5">
				Central Connecticut State University New Britain, Connecticut
			</Typography>
			<Typography variant="button">Bachelors in Business Management</Typography>
		</Container>
	);
};

export default Resume;
