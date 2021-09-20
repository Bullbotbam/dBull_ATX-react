import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';

function About() {
	return (
		<Container>
			<div className="container">
				<div className="my-2">
					<Typography gutterBottom variant="h3" id="about">
						Who is dBull?
					</Typography>

					<Typography variant="subtitle1">
						My broad knowledge base and critical thinking skills have allowed me
						to be a benefit to every team I have been a part of. To my peers, I
						have been known to offer insightful analysis to challenges they may
						face. One of my best skills is the ability to listen to the needs of
						my customers. It may feel obvious as well that you are obligated to
						actually pay attention to your customers, so that you know what
						their needs may be. I am a believer in detailed communication and
						the necessity for team collaboration. Which is no replacement for
						hard work and determination. Two more of my notable skills. In my
						past roles as a manager or director I have gained a broad analysis
						of effective management and team building. Through solid research
						and exploration I persistently quest for new techniques or methods
						to enhance my abilities. I find discovery an essential role in
						business development and enhances preparedness. This is why I am a
						lifelong learner.
					</Typography>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				></div>
			</div>
		</Container>
	);
}

export default About;
