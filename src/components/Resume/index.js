import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FileDownload from '../FileDownload';
import Divider from '@material-ui/core/Divider';

const Resume = () => {
	return (
		<Container style={{ color: '#757575' }} className="resumeBody">
			<Typography variant="h2">Donald Bull</Typography>
			<Typography variant="h5">
				Austin, Texas - dbullaustintx@gmail.com ||
				www.linkedin.com/in/donaldjbull-atx || https://github.com/Bullbotbam
			</Typography>
			<Typography variant="button">
				Seeking to become a member of a team, where I can help influence the
				culture and environment of a group who values the broad knowledge base
				of my 10 plus years of management. I am a highly-coachable, customer
				centric colleague who is eager to learn and expand my technical skills,
				program development, and training experience.
			</Typography>
			<br />
			<Divider sx={{ my: 0.5 }}>Skills</Divider>
			<br />
			<br />
			<Typography variant="button">
				<li>
					HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, React.js,
					Node.js), GraphQL, Local Storage, MySQL, User Authentication, JWT,
					Progressive Web App, Bootstrap, JQuery, Mongoose, Sequelize,
					Handlebars, MVC, OOP
				</li>
			</Typography>
			<br />
			<Divider sx={{ my: 0.5 }}>Projects</Divider>
			<br />
			<br />
			<Typography variant="button">
				<a
					href="https://farm-gomarket.herokuapp.com/"
					rel="noreferrer noopener"
					target="_blank"
					style={{ textDecoration: 'none', color: '#757575', fontSize: '1rem' }}
				>
					FarmGo Market
				</a>
			</Typography>
			<br />
			<Typography variant="button">
				<a
					href="https://evening-oasis-97339.herokuapp.com/"
					rel="noreferrer noopener"
					target="_blank"
					style={{ textDecoration: 'none', color: '#757575', fontSize: '1rem' }}
				>
					High5!
				</a>
			</Typography>
			<br />
			<Typography variant="button">
				<a
					href="https://bullbotbam.github.io/dinner_n_movie/"
					rel="noreferrer noopener"
					target="_blank"
					style={{ textDecoration: 'none', color: '#757575', fontSize: '1rem' }}
				>
					Dinner 'N Movie
				</a>
			</Typography>
			<Divider sx={{ my: 0.5 }}>Employment History</Divider>
			<br />
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
			</Typography>
			<br />
			<Typography variant="h5">
				Plateau Property Management Austin, Texas Facility Manager
			</Typography>
			<Typography variant="button">
				<li>
					Managed databases and company’s online presence as well as created
					content along with automation for over 25 HOA and COA communities.
				</li>
				<li>
					Created workflow policies that leveraged relationships troubleshoot
					challenges for external/internal customers.
				</li>
				<li>
					Supervised data collection of user database, community websites, event
					management CMS tools.
				</li>
				<li>Developed automated procedural RFP processes.</li>
				<li>
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
					Field Supervisor, specializing in hardware Network connectivity.
				</li>
				<li>Developed ABM's printed media monitoring system.</li>
			</Typography>
			<Divider sx={{ my: 0.5 }}>Education</Divider>

			{/* <Typography variant="h4">Education</Typography> */}
			<Typography variant="h5">
				University of Texas Austin, Texas Web Development
			</Typography>
			<Typography variant="button">Certificate </Typography>

			<Typography variant="h5">
				Central Connecticut State University New Britain, Connecticut
			</Typography>
			<Typography variant="button">Bachelors in Business Management</Typography>
			<div className="resButton" color="text.secondary">
				<FileDownload />
			</div>
		</Container>
	);
};

export default Resume;
