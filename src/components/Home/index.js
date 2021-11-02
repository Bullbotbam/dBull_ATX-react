import React from 'react';
import { Container, Typography, Avatar, Box } from '@material-ui/core';
import coverImage from '../../assets/cover/dbull_atx_logo.png';

function Home() {
	return (
		<Container>
			<div className="container" style={{ color: '#757575' }}>
				<div> </div>
				<Box display="flex" justifyContent="center">
					<Avatar
						style={{
							height: '10rem',
							width: '10rem',
							borderRadius: '50%',
							marginTop: '3rem',
							boxShadow: '0px 0px 35px #fcd121',
						}}
						alt="dbull avatar"
						src={coverImage}
					/>
				</Box>
				<div className="my-2">
					<Typography
						className="about-title"
						gutterBottom
						variant="h2"
						id="about"
					>
						Who is dBull?
					</Typography>

					<Typography
						className="about-body"
						style={{
							textAlign: 'justify',
							backgroundColor: 'rgba(252, 252, 252, 0.5)',
						}}
						variant="h5"
					>
						My broad knowledge base and critical thinking skills have allowed me
						to be a benefit to every team I have been a part of. To my peers, I
						am known to offer insightful analysis to any challenges they may
						face. One of my best skills is the ability to listen to the needs of
						my customers. Some may understand that obviously you are obligated
						to pay attention to your customers, so you may know what their needs
						may be.
						<br />
						<br />I am a firm believer in detailed communication and the
						necessity for team collaboration. Which is no replacement for hard
						work and determination. Two more of my notable skills. In my past
						roles as a manager or director I have been able to gain a broad
						analysis of effective management and team building techniques.
						Through solid research and exploration I persistently quest for new
						strategies/methods to enhance my abilities. I find personal and
						professional discovery an essential role in business development and
						enhances preparedness.
						<br />
						<br />
						This is why I consider myself a lifelong learner...
					</Typography>
				</div>
			</div>
		</Container>
	);
}

export default Home;
