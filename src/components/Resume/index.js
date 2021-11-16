import React from 'react';
import { Container, Typography, Tooltip } from '@material-ui/core';
import FileDownload from '../FileDownload';
import Divider from '@material-ui/core/Divider';
import {
	IoLogoNodejs,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoHtml5,
} from 'react-icons/io';
import { DiMongodb, DiMysql, DiGit } from 'react-icons/di';
import { FaReact, FaNpm } from 'react-icons/fa';

const Resume = () => {
	return (
		<Container
			style={{
				color: '#757575',
				background: '#fff',
				opacity: '.90',
				borderRadius: '1.5rem',
			}}
			className="resumeBody"
		>
			<Typography variant="h2">Donald Bull</Typography>
			<Typography variant="h5">
				Austin, Texas - dbullaustintx@gmail.com ||
				www.linkedin.com/in/donaldjbull-atx || https://github.com/Bullbotbam
			</Typography>
			<Divider style={{ marginBottom: '1rem' }} />
			<Typography variant="h6">
				Seeking to become a member of a team, where I can help influence the
				culture and environment of a group who values the broad knowledge base
				of my 10 plus years of management. I am a highly-coachable, customer
				centric colleague who is eager to learn and expand my technical skills,
				program development, and training experience.
			</Typography>
			<Typography variant="h6">
				<h3 style={{ marginBottom: '0' }}>Technical Skills</h3>
				<Divider style={{ marginBottom: '1rem' }} />
				<p style={{ marginLeft: '2rem' }}>Proficient in:</p>
				<div style={{ marginLeft: '15rem' }}>
					<Tooltip title="MongoDB">
						<i style={{ marginLeft: '3%' }}>
							<DiMongodb size={40} />
						</i>
					</Tooltip>
					<Tooltip title="React">
						<i style={{ marginLeft: '3%' }}>
							<FaReact size={40} />
						</i>
					</Tooltip>
					<Tooltip title="Node.JS">
						<i style={{ marginLeft: '3%' }}>
							<IoLogoNodejs size={40} />
						</i>
					</Tooltip>
					<Tooltip title="JavaScript">
						<i style={{ marginLeft: '3%' }}>
							<IoLogoJavascript size={40} />
						</i>
					</Tooltip>
					<Tooltip title="CSS3">
						<i style={{ marginLeft: '3%' }}>
							<IoLogoCss3 size={40} />
						</i>
					</Tooltip>
					<Tooltip title="HTML5">
						<i style={{ marginLeft: '3%' }}>
							<IoLogoHtml5 size={40} />
						</i>
					</Tooltip>
					<Tooltip title="MySQL">
						<i style={{ marginLeft: '3%' }}>
							<DiMysql size={40} />
						</i>
					</Tooltip>
					<Tooltip title="Git">
						<i style={{ marginLeft: '3%' }}>
							<DiGit size={40} />
						</i>
					</Tooltip>
					<Tooltip title="NPM">
						<i style={{ marginLeft: '3%' }}>
							<FaNpm size={40} />
						</i>
					</Tooltip>
				</div>
			</Typography>
			<Typography variant="h6">
				<h3 style={{ marginBottom: '0' }}>Projects</h3>
				<Divider style={{ marginBottom: '1rem' }} />
				<Typography variant="h6">FarmGo Market</Typography>

				<a
					href="https://farm-gomarket.herokuapp.com/"
					rel="noreferrer noopener"
					target="_blank"
					style={{ marginLeft: '3rem' }}
				>
					https://farm-gomarket.herokuapp.com/ &nbsp;&nbsp;
				</a>

				<a
					href="https://github.com/Bullbotbam/farm-go"
					rel="noreferrer noopener"
					target="_blank"
				>
					&nbsp;&nbsp; https://github.com/Bullbotbam/farm-go
				</a>

				<p style={{ marginLeft: '2rem' }}>
					The app facilitates a way to become better connected to your food
					source. By allowing the user to search for local farmers markets.
					Technologies used: Mongodb, Express, React, Node, Graphql, Stripe,
					Mongoose, Material-Ui, JWTs, Apollo-Client, USDA API
				</p>
			</Typography>
			<Typography variant="h6">
				<Typography variant="h6">High5!</Typography>
				<a
					href="https://evening-oasis-97339.herokuapp.com/ "
					rel="noreferrer noopener"
					target="_blank"
					style={{ marginLeft: '3rem' }}
				>
					https://evening-oasis-97339.herokuapp.com/ &nbsp;&nbsp;
				</a>
				<a
					href="https://github.com/Bullbotbam/high-five"
					rel="noreferrer noopener"
					target="_blank"
				>
					&nbsp;&nbsp; https://github.com/Bullbotbam/high-five
				</a>

				<p style={{ marginLeft: '2rem' }}>
					Helps users find a close-knit group to vent or share excitement about
					the big win. New to town or just want to connect with new people join
					High5! to create blogs, interact with friends or follow current
					members with similar interests. Technologies used: Mongodb, Express,
					Mysql, Sequelize, Handlebars, Dotenv, Bcrypt,
					Connect-Session-Sequlize, REST API
				</p>
			</Typography>
			<Typography variant="h6">
				<Typography variant="h6">Dinner 'N Movie</Typography>
				<a
					href="https://bullbotbam.github.io/dinner_n_movie/"
					rel="noopener noreferrer"
					target="_blank"
					style={{ marginLeft: '3rem' }}
				>
					https://bullbotbpm.github.io/dinner_n_movie/ &nbsp;&nbsp;
				</a>
				<a
					href="https://github.com/Bullbotbam/dinner_n_movie"
					rel="noopener noreferrer"
					target="_blank"
				>
					&nbsp;&nbsp; https://github.com/Bullbotbam/dinner_n_movie
				</a>

				<p style={{ marginLeft: '2rem' }}>
					An app intended to make date night easier. Check in to find great
					recipes for your favorite dishes. Grab movie suggestions for your next
					“Netflix and chill” session. Technologies used: Javascript, Css, Html,
					Bulma, React, Edamam API, The Movie Database API
				</p>
			</Typography>
			<Typography variant="h5">
				<h3 style={{ marginBottom: '0' }}>Employment</h3>
				<Divider style={{ marginBottom: '1rem' }} />
				dBull_ATX Austin, Texas - Web Developer - Present
			</Typography>
			<Typography variant="h6">
				<p style={{ marginLeft: '2rem' }}>
					Independent contractor building web content for a variety of clientel.
					Website development proposals, designing page layout, content
					management systems, develop client branding strategy.
				</p>
			</Typography>
			<Typography variant="h5">
				Plateau Property Management Austin, Texas Facility Manager - June, 2011
				- December, 2021
			</Typography>
			<Typography variant="h6">
				<p style={{ marginLeft: '2rem' }}>
					Managed databases and company’s online presence as well as created
					content along with automation for over 25 HOA and COA communities.{' '}
					Created workflow policies that leveraged relationships troubleshoot
					challenges for external/internal customers. Supervised data collection
					of user database, community websites, event management CMS tools.{' '}
					Developed automated procedural RFP processes. Evaluated and
					administered all hardware, software installation, web applications
					enabled to operate client services.
				</p>
			</Typography>
			<Typography variant="h5">
				American Business Machines Houston, Texas Director of Managed Print
				Services - February, 2004 - May, 2011
			</Typography>
			<Typography variant="h6">
				<p style={{ marginLeft: '2rem' }}>
					Copier Technician with expertise in Hewlett-Packard Business products.
					Advanced Color Specialist, maintence system trainer. Field Supervisor,
					specializing in hardware Network connectivity. Developed ABM's printed
					media monitoring system.
				</p>
			</Typography>
			<Typography variant="h6">
				{' '}
				<h3 style={{ marginBottom: '0' }}>Education</h3>
			</Typography>
			<Divider />
			<Typography variant="h6" style={{ marginLeft: '2rem' }}>
				University of Texas Austin, Texas Web Development
			</Typography>
			<Typography variant="h6" style={{ marginLeft: '2.5rem' }}>
				Certificate{' '}
			</Typography>
			<Typography variant="h6" style={{ marginLeft: '2rem' }}>
				Central Connecticut State University New Britain, Connecticut
			</Typography>
			<Typography variant="h6" style={{ marginLeft: '2.5rem' }}>
				Bachelors in Business Management
			</Typography>{' '}
			<div className="resButton" color="text.secondary">
				<FileDownload />
			</div>
		</Container>
	);
};

export default Resume;
