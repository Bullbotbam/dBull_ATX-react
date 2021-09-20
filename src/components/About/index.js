import React from 'react';
// import Content from '../Content';
import coverImage from '../../assets/cover/';

function About() {
	return (
		<section>
			<div className="container">
				<div className="my-2">
					<h1 id="about">Who is dBull?</h1>

					<p>
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
					</p>
					<img
						src={coverImage}
						align="center"
						className="my-2"
						style={{ width: '20%' }}
						alt="cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
